# Calendly-Notion Integration

This document describes the integration between Calendly and Notion to automatically update booking statuses.

## Overview

The integration works as follows:
1. User completes the pricing funnel → Creates Notion page with refId
2. User books Calendly meeting with UTM parameter → `utm_campaign=ref_xxx`
3. Calendly webhook triggers → Updates Notion status to "Booked"

## Environment Variables

Create a `.env` file with the following variables:

```bash
# Notion API Configuration
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=24ce28ab-3971-80cd-b355-f987c504b3f6

# Calendly Configuration  
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/anil-automatics/30min
CALENDLY_WEBHOOK_SECRET=your_webhook_secret_here
CALENDLY_PERSONAL_ACCESS_TOKEN=your_calendly_token_here
```

## Setup Instructions

### 1. Notion Setup
1. Create a Notion integration at https://www.notion.so/my-integrations
2. Get your API key and database ID
3. Add the integration to your database

### 2. Calendly Setup
1. Go to Calendly Integrations
2. Create a webhook subscription
3. Set the webhook URL to: `https://automatics.dev/api/calendly-webhook-v2`
4. Select events: `invitee.created`, `invitee.canceled`

### 3. Webhook Configuration
The webhook expects the following payload structure:
```json
{
  "event": "invitee.created",
  "payload": {
    "tracking": {
      "utm_campaign": "ref_me8jwdnt_c0ff44a6"
    },
    "email": "user@example.com",
    "name": "John Doe",
    "event": "https://api.calendly.com/scheduled_events/xxx",
    "cancel_url": "https://calendly.com/cancellations/xxx",
    "reschedule_url": "https://calendly.com/reschedulings/xxx"
  }
}
```

## Testing

### Test the Webhook
```bash
node test-calendly-exact.js ref_me8jwdnt_c0ff44a6
```

### Test Notion Update
```bash
node test-notion-update.js ref_me8jwdnt_c0ff44a6 Booked
```

## API Endpoints

### POST /api/calendly-webhook-v2
Handles Calendly webhook events and updates Notion records.

**Request Body:**
- Calendly webhook payload

**Response:**
- 200 OK: Successfully processed
- 400 Bad Request: Invalid payload
- 500 Internal Server Error: Processing error

## Troubleshooting

### Common Issues

1. **Webhook not receiving events**
   - Check Calendly webhook configuration
   - Verify endpoint URL is accessible
   - Check webhook secret validation

2. **Notion update fails**
   - Verify NOTION_API_KEY is set correctly
   - Check database permissions
   - Ensure refId exists in database

3. **RefId not found**
   - Verify UTM parameter is set correctly in Calendly URL
   - Check webhook payload structure
   - Ensure refId format matches database

### Debug Endpoints

- `/api/debug-webhook` - Test webhook payload processing
- `/api/test-env` - Check environment variables
- `/api/test-notion` - Test Notion API connection

## Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- Validate webhook signatures in production
- Implement rate limiting for webhook endpoints
