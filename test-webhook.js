// Test script to simulate a Calendly webhook
// Usage: node test-webhook.js <refId>

const refId = process.argv[2] || 'ref_test_123456';

const webhookPayload = {
  event: 'invitee.created',
  created_at: new Date().toISOString(),
  payload: {
    uuid: 'test-booking-' + Date.now(),
    event: {
      start_time: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      end_time: new Date(Date.now() + 90000000).toISOString(), // Tomorrow + 1 hour
      name: 'Test Meeting'
    },
    email: 'test@example.com',
    event_type: {
      name: '30 Minute Meeting'
    },
    uri: 'https://calendly.com/scheduled_events/test-123'
  },
  tracking: {
    utm_campaign: refId, // This is where the refId is passed
    utm_source: 'funnel',
    utm_medium: 'web'
  }
};

// Send to local endpoint (for local testing)
// fetch('http://localhost:3000/api/calendly/webhook', {

// Send to production endpoint
fetch('https://automatics.dev/api/calendly/webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(webhookPayload)
})
.then(response => response.json())
.then(data => {
  console.log('Webhook response:', data);
})
.catch(error => {
  console.error('Error:', error);
});

console.log('Sending test webhook with refId:', refId);
console.log('Payload:', JSON.stringify(webhookPayload, null, 2));