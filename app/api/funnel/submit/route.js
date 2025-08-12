import { NextResponse } from 'next/server';
import { createFunnelSubmission } from '@/app/lib/notion';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { answers, recommendation } = body;

    // Validate required fields
    if (!answers || !recommendation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create submission in Notion
    const result = await createFunnelSubmission({
      ...answers,
      recommendation,
    });

    // Generate Calendly URL with refId
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/your-link';
    
    // Option 1: Add refId as UTM campaign parameter
    const bookingUrl = `${calendlyUrl}?utm_campaign=${result.refId}`;
    
    // Option 2: If using Calendly embed with custom questions
    // const bookingUrl = `${calendlyUrl}?a1=${result.refId}`;

    return NextResponse.json({
      success: true,
      refId: result.refId,
      bookingUrl,
      pageId: result.pageId,
    });
  } catch (error) {
    console.error('Funnel submission error:', error);
    console.error('Full error details:', error.body || error);
    
    // Return error response with more details in development
    return NextResponse.json(
      { 
        error: 'Failed to process submission',
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.body : undefined,
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check submission status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const refId = searchParams.get('refId');

    if (!refId) {
      return NextResponse.json(
        { error: 'RefId is required' },
        { status: 400 }
      );
    }

    // This could be used to check the status of a submission
    // For now, just return success
    return NextResponse.json({
      success: true,
      refId,
      message: 'Use this endpoint to check submission status',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to check status' },
      { status: 500 }
    );
  }
}