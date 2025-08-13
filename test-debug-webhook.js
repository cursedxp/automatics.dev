// Test the debug webhook endpoint
const refId = process.argv[2] || 'ref_me8jwdnt_c0ff44a6';

const testPayload = {
  event: 'invitee.created',
  created_at: new Date().toISOString(),
  payload: {
    invitee: {
      email: 'test@example.com',
      tracking: {
        utm_campaign: refId,
        utm_source: null,
        utm_medium: null
      }
    },
    event: {
      start_time: '2025-08-14T07:00:00.000000Z',
      end_time: '2025-08-14T07:45:00.000000Z',
      name: 'Test Meeting'
    },
    uuid: 'test-' + Date.now()
  }
};

console.log('Testing debug webhook with refId:', refId);
console.log('Sending to: https://automatics.dev/api/debug-webhook');

fetch('https://automatics.dev/api/debug-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testPayload)
})
.then(response => response.json())
.then(data => {
  console.log('\n=== DEBUG RESPONSE ===');
  console.log(JSON.stringify(data, null, 2));
  
  if (data.success) {
    console.log('\n✅ SUCCESS! Status updated to Booked');
  } else {
    console.log('\n❌ FAILED');
    if (data.debugInfo) {
      console.log('\nDebug steps:');
      data.debugInfo.steps.forEach(step => {
        console.log(`  - ${step.step}:`, step);
      });
    }
  }
})
.catch(error => {
  console.error('Error:', error);
});