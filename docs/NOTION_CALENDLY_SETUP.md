# Notion & Calendly Integration Setup Guide

## Overview
This integration captures funnel submissions in Notion and automatically updates them when users book meetings through Calendly.

## Data Flow
1. User completes pricing funnel → Creates Notion page with `refId`
2. User redirected to Calendly with `refId` in URL
3. User books meeting → Calendly webhook updates Notion page
4. All data stored in Notion (GDPR compliant)

## Notion Setup

### 1. Create Notion Integration
1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Funnel Submissions")
4. Select your workspace
5. Copy the Internal Integration Token

### 2. Create Notion Database
Create a database with the following properties:

| Property Name | Type | Description |
|--------------|------|-------------|
| RefId | Title | Unique reference ID (primary) |
| Status | Select | Options: `pending`, `booked`, `canceled` |
| TeamSize | Number | Team size from funnel |
| ProjectComplexity | Select | Options: `validation`, `development`, `enterprise` |
| Budget | Select | Options: `essential`, `growth`, `premium`, `enterprise` |
| Timeline | Select | Options: `urgent`, `standard`, `planned`, `flexible` |
| SupportLevel | Select | Options: `basic`, `standard`, `premium`, `dedicated` |
| RecommendedPlan | Select | Options: `essential`, `growth`, `enterprise` |
| CreatedAt | Date | Submission timestamp |
| RawAnswers | Text | JSON of all answers |
| BookingId | Text | Calendly booking ID |
| BookingStart | Date | Meeting start time |
| BookingEnd | Date | Meeting end time |
| InviteeEmail | Email | Booker's email |
| EventType | Text | Calendly event type |
| BookedAt | Date | Booking timestamp |

### 3. Share Database with Integration
1. Open your database in Notion
2. Click "..." menu → "Add connections"
3. Search for your integration name
4. Click "Confirm"

### 4. Get Database ID
1. Open your database in Notion
2. Copy the URL: `https://notion.so/{workspace}/{database_id}?v={view_id}`
3. The `database_id` is the 32-character string

## Calendly Setup

### 1. Configure Webhook
1. Go to [Calendly Integrations](https://calendly.com/integrations)
2. Find "Webhooks" and click "Install"
3. Add webhook endpoint: `https://your-domain.com/api/calendly/webhook`
4. Select events:
   - `invitee.created` (when someone books)
   - `invitee.canceled` (when someone cancels)
5. Copy the Signing Key for verification

### 2. Add UTM Tracking
There are two ways to pass the `refId` to Calendly:

#### Option A: UTM Parameters (Recommended)
The integration automatically appends `?utm_campaign=ref_xxxxx` to your Calendly link.

To enable UTM tracking in Calendly:
1. This is automatically captured by Calendly
2. Available in webhook payload under `tracking.utm_campaign`

#### Option B: Custom Questions
1. In your Calendly event type settings
2. Go to "Invitee Questions"
3. Add a hidden or optional field named "Reference ID"
4. The integration can pre-fill this via URL: `?a1=ref_xxxxx`

### 3. Test Webhook
Use the Calendly webhook test feature to send a test payload:
```bash
curl -X POST https://your-domain.com/api/calendly/webhook \
  -H "Content-Type: application/json" \
  -H "X-Calendly-Webhook-Signature: test" \
  -d '{
    "event": "invitee.created",
    "payload": {
      "uuid": "test-booking-123",
      "email": "test@example.com",
      "event": {
        "start_time": "2024-01-01T10:00:00Z",
        "end_time": "2024-01-01T10:30:00Z",
        "name": "Discovery Call"
      }
    },
    "tracking": {
      "utm_campaign": "ref_test123"
    }
  }'
```

## Environment Variables

Add to your `.env.local`:

```env
# Notion
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_WEBHOOK_LOG_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx # Optional

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/discovery-call
CALENDLY_WEBHOOK_SECRET=your_webhook_signing_key
```

## Testing the Integration

### 1. Test Funnel Submission
```javascript
// Test via browser console on your site
fetch('/api/funnel/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    answers: {
      team_size: 10,
      project_complexity: 'development',
      budget: 'growth',
      timeline: 'standard',
      support_level: 'standard'
    },
    recommendation: 'growth'
  })
}).then(r => r.json()).then(console.log)
```

### 2. Verify Notion Page Created
- Check your Notion database for new entry
- Note the `refId` value

### 3. Test Calendly Booking
- Use the returned `bookingUrl` to book a test meeting
- Or manually append `?utm_campaign=ref_test123` to your Calendly link

### 4. Verify Webhook Processing
- Check Notion page status changed to "booked"
- Check booking details populated

## Security Considerations

### GDPR Compliance
- Personal data (email) only stored in Notion, not in application
- Data processed only for booking management
- Implement data retention policy in Notion

### Webhook Security
- Signature verification enabled
- Idempotency checks prevent duplicate processing
- Rate limiting recommended for production

### Error Handling
- Automatic retry with exponential backoff
- Failed webhooks logged for debugging
- Fallback to direct Calendly link if submission fails

## Monitoring

### Webhook Logs
Create a separate Notion database for webhook logs with:
- WebhookId (Title)
- Status (Select: success, failed, retry)
- EventType (Text)
- Payload (Text - first 2000 chars)
- Error (Text)
- ProcessedAt (Date)

### Health Check
Monitor endpoint health:
```bash
curl https://your-domain.com/api/calendly/webhook
```

## Troubleshooting

### Common Issues

1. **Notion page not created**
   - Check API key and database ID
   - Verify database is shared with integration
   - Check property names match exactly

2. **Webhook not updating Notion**
   - Verify webhook signature if configured
   - Check refId is properly passed through Calendly
   - Look for webhook logs in Notion

3. **RefId not found in webhook**
   - Ensure UTM parameters are enabled in Calendly
   - Check if using correct parameter format
   - Verify URL encoding is preserved

### Debug Mode
Add to your API routes for detailed logging:
```javascript
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) {
  console.log('Webhook payload:', JSON.stringify(payload, null, 2));
}
```

## Production Checklist

- [ ] Notion integration created and tested
- [ ] Database structure matches requirements
- [ ] Environment variables configured
- [ ] Calendly webhook registered
- [ ] Signature verification enabled
- [ ] Error logging configured
- [ ] GDPR compliance verified
- [ ] Rate limiting implemented
- [ ] Monitoring alerts set up
- [ ] Backup contact method configured