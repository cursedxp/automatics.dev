// Complete test simulating exact Calendly webhook structure
// Usage: node test-full-webhook.js <refId>

const refId = process.argv[2] || 'ref_me8jwdnt_c0ff44a6';

// This is the EXACT structure Calendly sends based on their documentation
const calendlyWebhook = {
  "created_at": "2025-08-12T15:30:00.000000Z",
  "created_by": "https://api.calendly.com/users/f7d09fdd-5287-4d60-b6b6-32b2f9b27ded",
  "event": "invitee.created",
  "payload": {
    "cancel_url": "https://calendly.com/cancellations/test-123",
    "created_at": "2025-08-12T15:30:00.000000Z",
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
    "reschedule_url": "https://calendly.com/reschedulings/test-123",
    "rescheduled": false,
    "routing_form_submission": null,
    "scheduled_event": {
      "created_at": "2025-08-12T15:30:00.000000Z",
      "end_time": "2025-08-14T08:00:00.000000Z",
      "event_guests": [],
      "event_memberships": [
        {
          "user": "https://api.calendly.com/users/f7d09fdd-5287-4d60-b6b6-32b2f9b27ded",
          "user_email": "anil@automatics.dev"
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
      "updated_at": "2025-08-12T15:30:00.000000Z",
      "uri": "https://api.calendly.com/scheduled_events/test-event-123"
    },
    "scheduling_method": null,
    "status": "active",
    "text_reminder_number": null,
    "timezone": "Europe/Berlin",
    "tracking": {
      "utm_campaign": refId,  // This is where the refId is!
      "utm_source": null,
      "utm_medium": null,
      "utm_content": null,
      "utm_term": null,
      "salesforce_uuid": null
    },
    "updated_at": "2025-08-12T15:30:00.000000Z",
    "uri": "https://api.calendly.com/scheduled_events/test-event-123/invitees/test-invitee-123"
  }
};

console.log('Testing webhook with refId:', refId);
console.log('Sending to: https://automatics.dev/api/calendly/webhook');

fetch('https://automatics.dev/api/calendly/webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(calendlyWebhook)
})
.then(response => response.json())
.then(data => {
  console.log('\nResponse from webhook:');
  console.log(JSON.stringify(data, null, 2));
  
  if (data.success) {
    console.log('\n✅ Webhook processed successfully!');
    console.log('Check your Notion database - the status should now be "Booked"');
  } else {
    console.log('\n❌ Webhook failed:', data.error);
  }
})
.catch(error => {
  console.error('Error calling webhook:', error);
});