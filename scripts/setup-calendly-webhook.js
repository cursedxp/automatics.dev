#!/usr/bin/env node

// Script to set up Calendly webhook subscription
// Usage: node scripts/setup-calendly-webhook.js

// Load environment variables
require('dotenv').config();

const CALENDLY_TOKEN = process.env.CALENDLY_PERSONAL_ACCESS_TOKEN;
const WEBHOOK_URL = process.env.NEXT_PUBLIC_API_URL ? 
  `${process.env.NEXT_PUBLIC_API_URL}/api/calendly/webhook` : 
  'https://thoughtlink.vercel.app/api/calendly/webhook';

async function setupWebhook() {
  try {
    // Step 1: Get current user
    console.log('Getting user information...');
    const userResponse = await fetch('https://api.calendly.com/users/me', {
      headers: {
        'Authorization': `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!userResponse.ok) {
      throw new Error(`Failed to get user: ${await userResponse.text()}`);
    }

    const userData = await userResponse.json();
    const userUri = userData.resource.uri;
    const organization = userData.resource.current_organization;
    
    console.log('User URI:', userUri);
    console.log('Organization:', organization);

    // Step 2: Create webhook subscription
    console.log('\nCreating webhook subscription...');
    const webhookResponse = await fetch('https://api.calendly.com/webhook_subscriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        events: [
          'invitee.created',
          'invitee.canceled'
        ],
        organization: organization,
        user: userUri,
        scope: 'user',
        signing_key: generateSigningKey() // Calendly will generate one if not provided
      })
    });

    if (!webhookResponse.ok) {
      const error = await webhookResponse.text();
      throw new Error(`Failed to create webhook: ${error}`);
    }

    const webhookData = await webhookResponse.json();
    
    console.log('\n✅ Webhook created successfully!');
    console.log('Webhook URL:', webhookData.resource.callback_url);
    console.log('Webhook URI:', webhookData.resource.uri);
    console.log('Events:', webhookData.resource.events);
    console.log('\n🔑 IMPORTANT - Save this signing key:');
    console.log('Signing Key:', webhookData.resource.signing_key);
    console.log('\nAdd this to your .env file:');
    console.log(`CALENDLY_WEBHOOK_SECRET=${webhookData.resource.signing_key}`);

    // Step 3: List all webhooks to verify
    console.log('\n📋 All your webhooks:');
    const listResponse = await fetch(`https://api.calendly.com/webhook_subscriptions?organization=${organization}&user=${userUri}`, {
      headers: {
        'Authorization': `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const listData = await listResponse.json();
    listData.collection.forEach((webhook, index) => {
      console.log(`${index + 1}. ${webhook.callback_url} - ${webhook.state} - Events: ${webhook.events.join(', ')}`);
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

function generateSigningKey() {
  // Generate a random signing key
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return key;
}

// Run the setup
console.log('🚀 Setting up Calendly webhook...\n');
setupWebhook();