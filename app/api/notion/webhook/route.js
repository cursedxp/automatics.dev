import { NextResponse } from "next/server";

/**
 * Notion Webhook Handler
 * Handles webhooks from Notion when database records are updated
 */

export async function POST(request) {
  console.log("[Notion Webhook] Received webhook event");

  try {
    // Parse the webhook payload
    const webhookPayload = await request.json();

    console.log(
      "[Notion Webhook] Payload:",
      JSON.stringify(webhookPayload, null, 2)
    );

    // Process Notion webhook events here
    // This could be used for:
    // - Syncing data back to other systems
    // - Triggering notifications
    // - Updating external services when Notion records change

    return NextResponse.json({
      success: true,
      message: "Notion webhook processed successfully",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[Notion Webhook] Handler error:", error);

    return NextResponse.json({
      success: false,
      error: error.message,
      message: "Notion webhook processing failed",
    }, { status: 500 });
  }
}

/**
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: "healthy",
    endpoint: "/api/notion/webhook",
    timestamp: new Date().toISOString(),
    message: "Notion webhook endpoint is ready",
  });
}