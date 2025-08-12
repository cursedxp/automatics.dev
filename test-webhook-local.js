// Test webhook locally

async function testWebhook() {
  const testPayload = {
    event: 'invitee.created',
    payload: {
      uuid: 'test-booking-12345',
      email: 'test@example.com',
      event: {
        start_time: '2025-01-15T10:00:00Z',
        end_time: '2025-01-15T10:30:00Z',
        name: 'Meet with the Automatics Team'
      }
    },
    tracking: {
      utm_campaign: 'ref_me8jwdnt_c0ff44a6' // Use a real refId from your Notion
    }
  };

  try {
    console.log('Sending test webhook...');
    const response = await fetch('http://localhost:3000/api/calendly/webhook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testPayload)
    });

    const result = await response.json();
    console.log('Response:', result);
    console.log('Status:', response.status);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testWebhook();