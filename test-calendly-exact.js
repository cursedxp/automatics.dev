/**
 * Test with EXACT Calendly webhook payload structure
 * Based on official Calendly documentation
 */

const refId = process.argv[2] || 'ref_me8jwdnt_c0ff44a6';
const endpoint = 'https://automatics.dev/api/calendly-webhook-v2';

console.log('🔧 Testing with EXACT Calendly Webhook Structure');
console.log('================================================');
console.log('RefId:', refId);
console.log('Endpoint:', endpoint);
console.log('');

// This is the EXACT structure from Calendly documentation
const calendlyWebhook = {
  "created_at": "2025-08-13T08:00:00.000000Z",
  "created_by": "https://api.calendly.com/users/f7d09fdd-5287-4d60-b6b6-32b2f9b27ded",
  "event": "invitee.created",
  "payload": {
    "cancel_url": "https://calendly.com/cancellations/AAAAAAAAAAAAAAAA",
    "created_at": "2025-08-13T08:00:00.327602Z",
    "email": "test@example.com",
    "event": "https://api.calendly.com/scheduled_events/GBGBDCAADAEDCRZ2",
    "name": "Test User",
    "new_invitee": null,
    "old_invitee": null,
    "questions_and_answers": [],
    "reschedule_url": "https://calendly.com/reschedulings/AAAAAAAAAAAAAAAA",
    "rescheduled": false,
    "status": "active",
    "text_reminder_number": null,
    "timezone": "Europe/Berlin",
    "tracking": {
      "utm_campaign": refId,  // YOUR REFID GOES HERE
      "utm_source": null,
      "utm_medium": null,
      "utm_content": null,
      "utm_term": null,
      "salesforce_uuid": null
    },
    "updated_at": "2025-08-13T08:00:00.341657Z",
    "uri": "https://api.calendly.com/scheduled_events/GBGBDCAADAEDCRZ2/invitees/AAAAAAAAAAAAAAAA",
    "canceled": false
  }
};

console.log('📤 Sending webhook with tracking.utm_campaign =', refId);
console.log('');

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(calendlyWebhook)
})
.then(response => response.json())
.then(data => {
  console.log('📥 Response:');
  console.log(JSON.stringify(data, null, 2));
  console.log('');
  
  if (data.success) {
    console.log('✅ SUCCESS! Notion page updated');
    console.log('   RefId:', refId);
    console.log('   Page ID:', data.pageId);
    console.log('');
    console.log('🎉 The integration is working correctly!');
  } else {
    console.log('❌ Failed to update Notion');
    console.log('   Error:', data.error);
    console.log('   Message:', data.message);
  }
})
.catch(error => {
  console.error('❌ Network error:', error.message);
});