import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { 
  findPageByRefId, 
  updatePageWithBooking, 
  isBookingProcessed,
  logWebhookAttempt 
} from '@/app/lib/notion';

// Verify Calendly webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
  
  return `sha256=${expectedSignature}` === signature;
}

// Extract refId from various sources
function extractRefId(payload) {
  // Option 1: From UTM campaign parameter in payload.payload.tracking (Calendly webhook structure)
  if (payload.payload?.tracking?.utm_campaign) {
    const campaign = payload.payload.tracking.utm_campaign;
    if (campaign.startsWith('ref_')) {
      return campaign;
    }
    // Also check if the entire campaign is the refId
    return campaign;
  }
  
  // Option 2: From UTM campaign parameter in payload.tracking (fallback)
  if (payload.tracking?.utm_campaign) {
    const campaign = payload.tracking.utm_campaign;
    if (campaign.startsWith('ref_')) {
      return campaign;
    }
    // Also check if the entire campaign is the refId
    return campaign;
  }

  // Option 3: From invitee tracking data (for invitee.created events)
  if (payload.payload?.invitee?.tracking?.utm_campaign) {
    const campaign = payload.payload.invitee.tracking.utm_campaign;
    if (campaign.startsWith('ref_')) {
      return campaign;
    }
    return campaign;
  }

  // Option 4: From custom questions/answers
  if (payload.questions_and_answers) {
    for (const qa of payload.questions_and_answers) {
      if (qa.question.toLowerCase().includes('reference') || 
          qa.question.toLowerCase().includes('ref')) {
        return qa.answer;
      }
    }
  }

  // Option 3: From custom fields in scheduling page
  if (payload.custom_fields) {
    for (const field of payload.custom_fields) {
      if (field.name === 'refId' || field.name === 'reference_id') {
        return field.value;
      }
    }
  }

  // Option 4: From URL parameters passed through
  if (payload.uri && payload.uri.includes('ref_')) {
    const match = payload.uri.match(/ref_[a-zA-Z0-9_]+/);
    if (match) {
      return match[0];
    }
  }

  return null;
}

// Process the webhook with retry logic
async function processWebhook(payload, retryCount = 0) {
  const MAX_RETRIES = 3;
  
  try {
    // Extract refId
    const refId = extractRefId(payload);
    
    if (!refId) {
      throw new Error('Could not extract refId from webhook payload');
    }

    // Extract booking details based on event type
    let bookingDetails = {};
    
    if (payload.event === 'invitee.created') {
      // For invitee.created events - check both possible structures
      bookingDetails = {
        bookingId: payload.payload?.uuid || payload.payload?.invitee?.uri?.split('/').pop() || 'unknown',
        start: payload.payload?.event?.start_time,
        end: payload.payload?.event?.end_time,
        inviteeEmail: payload.payload?.invitee?.email || payload.payload?.email,
        eventType: payload.payload?.event?.name || payload.payload?.event_type?.name,
      };
    } else if (payload.event === 'invitee.canceled') {
      // Handle cancellations
      const bookingId = payload.payload?.uuid || payload.payload?.uri?.split('/').pop();
      
      // Find and update the page
      const page = await findPageByRefId(refId);
      if (page) {
        await updatePageWithBooking(page.id, {
          bookingId,
          status: 'Canceled',
          canceledAt: new Date().toISOString(),
        });
      }
      
      return { success: true, action: 'canceled' };
    }

    // Check idempotency - skip if already processed
    const alreadyProcessed = await isBookingProcessed(bookingDetails.bookingId);
    if (alreadyProcessed) {
      console.log(`Booking ${bookingDetails.bookingId} already processed, skipping`);
      return { success: true, action: 'skipped', reason: 'duplicate' };
    }

    // Find the page in Notion
    const page = await findPageByRefId(refId);
    
    if (!page) {
      throw new Error(`No Notion page found for refId: ${refId}`);
    }

    // Update the page with booking details
    const result = await updatePageWithBooking(page.id, bookingDetails);
    
    // Log successful processing
    await logWebhookAttempt(payload, 'success');
    
    return { 
      success: true, 
      action: 'updated',
      pageId: page.id,
      refId 
    };
  } catch (error) {
    console.error(`Webhook processing error (attempt ${retryCount + 1}):`, error);
    
    // Retry logic
    if (retryCount < MAX_RETRIES) {
      // Exponential backoff
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
      
      return processWebhook(payload, retryCount + 1);
    }
    
    // Log failed attempt after all retries
    await logWebhookAttempt(payload, 'failed', error.message);
    
    throw error;
  }
}

export async function POST(request) {
  try {
    // Get the raw body for signature verification
    const rawBody = await request.text();
    
    // Get signature from headers
    const signature = request.headers.get('x-calendly-webhook-signature');
    
    // Verify webhook signature if secret is configured
    if (process.env.CALENDLY_WEBHOOK_SECRET && signature) {
      const isValid = verifyWebhookSignature(
        rawBody,
        signature,
        process.env.CALENDLY_WEBHOOK_SECRET
      );
      
      if (!isValid) {
        console.error('Invalid webhook signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    } else {
      // Log that signature verification is skipped
      console.log('Webhook signature verification skipped (no secret or signature)');
    }
    
    // Parse the webhook payload
    const payload = JSON.parse(rawBody);
    
    // Log the incoming webhook with full details
    console.log('Received Calendly webhook:', {
      event: payload.event,
      timestamp: new Date().toISOString(),
      tracking: payload.tracking,
      payload_tracking: payload.payload?.tracking,
      full_payload: JSON.stringify(payload, null, 2)
    });
    
    // Process the webhook with retry logic
    const result = await processWebhook(payload);
    
    // Return success response
    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Webhook handler error:', error);
    
    // Return error response
    // Important: Still return 200 to prevent Calendly from retrying
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Webhook received but processing failed',
    });
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    endpoint: '/api/calendly/webhook',
    timestamp: new Date().toISOString(),
  });
}