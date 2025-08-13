/**
 * Complete Calendly-Notion Integration Test
 * This simulates the exact webhook payload that Calendly sends
 */

const refId = process.argv[2] || 'ref_me8jwdnt_c0ff44a6';
const endpoint = process.argv[3] || 'https://automatics.dev/api/calendly-webhook-v2';

console.log('🔧 Testing Calendly-Notion Integration');
console.log('=====================================');
console.log('RefId:', refId);
console.log('Endpoint:', endpoint);
console.log('');

// This is the EXACT structure that Calendly sends for invitee.created events
const calendlyWebhookPayload = {
  "created_at": "2025-08-13T07:45:00.000000Z",
  "created_by": "https://api.calendly.com/users/f7d09fdd-5287-4d60-b6b6-32b2f9b27ded",
  "event": "invitee.created",
  "payload": {
    "cancel_url": "https://calendly.com/cancellations/abc123",
    "created_at": "2025-08-13T07:45:00.000000Z",
    "email": "test@example.com",
    "event": "https://api.calendly.com/scheduled_events/test-event-123",
    "first_name": "Test",
    "last_name": "User",
    "name": "Test User",
    "new_invitee": null,
    "no_show": null,
    "old_invitee": null,
    "payment": null,
    "questions_and_answers": [],
    "reconfirmation": null,
    "reschedule_url": "https://calendly.com/reschedulings/abc123",
    "rescheduled": false,
    "routing_form_submission": null,
    "scheduled_event": {
      "created_at": "2025-08-13T07:45:00.000000Z",
      "end_time": "2025-08-14T08:00:00.000000Z",
      "event_guests": [],
      "event_memberships": [
        {
          "user": "https://api.calendly.com/users/f7d09fdd-5287-4d60-b6b6-32b2f9b27ded",
          "user_email": "anil@automatics.dev",
          "user_name": "Anil Ozsoy"
        }
      ],
      "event_type": "https://api.calendly.com/event_types/test-type",
      "invitees_counter": {
        "active": 1,
        "limit": 1,
        "total": 1
      },
      "location": {
        "location": null,
        "type": "custom"
      },
      "meeting_notes_html": null,
      "meeting_notes_plain": null,
      "name": "30 Minute Meeting",
      "start_time": "2025-08-14T07:30:00.000000Z",
      "status": "active",
      "updated_at": "2025-08-13T07:45:00.000000Z",
      "uri": "https://api.calendly.com/scheduled_events/test-event-123"
    },
    "scheduling_method": null,
    "status": "active",
    "text_reminder_number": null,
    "timezone": "Europe/Berlin",
    "tracking": {
      "utm_campaign": refId,  // THIS IS WHERE THE REFID IS!
      "utm_source": null,
      "utm_medium": null,
      "utm_content": null,
      "utm_term": null,
      "salesforce_uuid": null
    },
    "updated_at": "2025-08-13T07:45:00.000000Z",
    "uri": "https://api.calendly.com/scheduled_events/test-event-123/invitees/test-invitee-123"
  }
};

console.log('📤 Sending webhook payload...');
console.log('');

fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(calendlyWebhookPayload)
})
.then(response => response.json())
.then(data => {
  console.log('📥 Response from webhook:');
  console.log('-------------------------');
  console.log(JSON.stringify(data, null, 2));
  console.log('');
  
  if (data.success) {
    console.log('✅ SUCCESS!');
    console.log('📝 Notion page updated:');
    console.log('   - RefId:', refId);
    console.log('   - Page ID:', data.pageId);
    console.log('   - Status: Changed to "Booked"');
    console.log('');
    console.log('🎉 Integration test passed! Check your Notion database.');
  } else {
    console.log('❌ FAILED');
    console.log('Error:', data.error);
    console.log('Message:', data.message);
    console.log('');
    console.log('🔍 Troubleshooting tips:');
    console.log('   1. Check that the refId exists in your Notion database');
    console.log('   2. Verify environment variables are set on Vercel');
    console.log('   3. Check Vercel function logs for detailed error messages');
  }
})
.catch(error => {
  console.error('❌ Network or parsing error:', error);
  console.log('');
  console.log('🔍 This usually means:');
  console.log('   - The endpoint is not deployed yet');
  console.log('   - There\'s a network issue');
  console.log('   - The response is not valid JSON');
});