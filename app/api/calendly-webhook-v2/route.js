import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

/**
 * Extract refId from Calendly webhook payload
 * According to Calendly docs, UTM parameters are in payload.tracking object
 */
function extractRefId(webhookPayload) {
  // Primary location according to Calendly documentation
  const tracking = webhookPayload?.payload?.tracking;
  
  if (tracking?.utm_campaign) {
    console.log('[Webhook] Found refId in tracking.utm_campaign:', tracking.utm_campaign);
    return tracking.utm_campaign;
  }
  
  // Check questions_and_answers as fallback
  const qa = webhookPayload?.payload?.questions_and_answers?.find(qa => 
    qa.question.toLowerCase().includes('reference') || 
    qa.question.toLowerCase().includes('ref')
  );
  
  if (qa?.answer) {
    console.log('[Webhook] Found refId in Q&A:', qa.answer);
    return qa.answer;
  }
  
  console.log('[Webhook] No refId found in payload');
  console.log('[Webhook] Tracking object:', JSON.stringify(tracking, null, 2));
  return null;
}

/**
 * Extract booking details from Calendly webhook
 * Based on actual Calendly webhook payload structure
 */
function extractBookingDetails(webhookPayload) {
  const payload = webhookPayload.payload || {};
  
  // Extract the invitee ID from the URI
  const inviteeId = payload.uri?.split('/').pop() || 'unknown';
  
  return {
    bookingId: inviteeId,
    inviteeEmail: payload.email || '',
    inviteeName: payload.name || '',
    eventUri: payload.event || '',
    cancelUrl: payload.cancel_url || '',
    rescheduleUrl: payload.reschedule_url || '',
    timezone: payload.timezone || '',
    rescheduled: payload.rescheduled || false,
    status: webhookPayload.event === 'invitee.canceled' ? 'Canceled' : 'Booked',
    createdAt: payload.created_at || webhookPayload.created_at,
  };
}

/**
 * Update Notion page with booking details
 */
async function updateNotionPage(refId, bookingDetails) {
  try {
    // Step 1: Find the page by refId
    console.log('[Notion] Searching for page with refId:', refId);
    
    const queryResponse = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'RefId',
        title: {
          equals: refId,
        },
      },
    });

    if (queryResponse.results.length === 0) {
      console.error('[Notion] No page found with refId:', refId);
      return { success: false, error: 'Page not found' };
    }

    const page = queryResponse.results[0];
    console.log('[Notion] Found page:', page.id);

    // Step 2: Update the page with booking details
    const updateProperties = {
      Status: {
        select: {
          name: bookingDetails.status,
        },
      },
    };

    // Add Email if provided (you mentioned you have an Email column)
    if (bookingDetails.inviteeEmail) {
      updateProperties.Email = {
        email: bookingDetails.inviteeEmail,
      };
    }

    // Add Name if provided (you mentioned you have a Name column)
    if (bookingDetails.inviteeName) {
      updateProperties.Name = {
        rich_text: [
          {
            text: {
              content: bookingDetails.inviteeName,
            },
          },
        ],
      };
    }

    // Add timestamp when booking was made
    updateProperties.BookedAt = {
      date: {
        start: new Date().toISOString(),
      },
    };

    console.log('[Notion] Updating page with properties:', updateProperties);

    const updateResponse = await notion.pages.update({
      page_id: page.id,
      properties: updateProperties,
    });

    console.log('[Notion] Page updated successfully:', updateResponse.id);
    return { success: true, pageId: updateResponse.id };

  } catch (error) {
    console.error('[Notion] Error updating page:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Main webhook handler
 */
export async function POST(request) {
  console.log('[Webhook] Received Calendly webhook');
  
  try {
    // Parse the webhook payload
    const webhookPayload = await request.json();
    
    console.log('[Webhook] Event type:', webhookPayload.event);
    console.log('[Webhook] Payload structure:', JSON.stringify(webhookPayload, null, 2));

    // Only process invitee.created and invitee.canceled events
    if (!['invitee.created', 'invitee.canceled'].includes(webhookPayload.event)) {
      console.log('[Webhook] Ignoring event type:', webhookPayload.event);
      return NextResponse.json({
        success: true,
        message: 'Event ignored',
      });
    }

    // Extract refId from the webhook payload
    const refId = extractRefId(webhookPayload);
    
    if (!refId) {
      console.error('[Webhook] No refId found in webhook payload');
      console.error('[Webhook] Full payload:', JSON.stringify(webhookPayload, null, 2));
      
      // Still return 200 to prevent Calendly from retrying
      return NextResponse.json({
        success: false,
        error: 'No refId found in payload',
        message: 'Webhook received but could not find reference ID',
      });
    }

    // Extract booking details
    const bookingDetails = extractBookingDetails(webhookPayload);
    console.log('[Webhook] Booking details:', bookingDetails);

    // Update Notion page
    const result = await updateNotionPage(refId, bookingDetails);
    
    if (result.success) {
      console.log('[Webhook] Successfully processed webhook');
      return NextResponse.json({
        success: true,
        message: 'Notion page updated',
        refId,
        pageId: result.pageId,
      });
    } else {
      console.error('[Webhook] Failed to update Notion:', result.error);
      // Still return 200 to prevent Calendly from retrying
      return NextResponse.json({
        success: false,
        error: result.error,
        message: 'Webhook received but Notion update failed',
      });
    }

  } catch (error) {
    console.error('[Webhook] Handler error:', error);
    
    // Still return 200 to prevent Calendly from retrying
    return NextResponse.json({
      success: false,
      error: error.message,
      message: 'Webhook received but processing failed',
    });
  }
}

/**
 * Health check endpoint
 */
export async function GET() {
  const hasNotionKey = !!process.env.NOTION_API_KEY;
  const hasNotionDb = !!process.env.NOTION_DATABASE_ID;
  
  return NextResponse.json({
    status: 'healthy',
    endpoint: '/api/calendly-webhook-v2',
    timestamp: new Date().toISOString(),
    config: {
      notionConfigured: hasNotionKey && hasNotionDb,
      notionKeyPrefix: process.env.NOTION_API_KEY?.substring(0, 7) || 'not set',
      notionDbPrefix: process.env.NOTION_DATABASE_ID?.substring(0, 8) || 'not set',
    },
  });
}