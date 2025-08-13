import { Client } from '@notionhq/client';
import crypto from 'crypto';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

// Generate unique reference ID
export const generateRefId = () => {
  const timestamp = Date.now().toString(36);
  const randomStr = crypto.randomBytes(4).toString('hex');
  return `ref_${timestamp}_${randomStr}`;
};

// Create a new funnel submission in Notion
export const createFunnelSubmission = async (answers) => {
  try {
    const refId = generateRefId();
    
    // Build properties object based on available fields
    const properties = {
      RefId: {
        title: [
          {
            text: {
              content: refId,
            },
          },
        ],
      },
      Status: {
        select: {
          name: 'Pending',
        },
      },
      CreatedAt: {
        date: {
          start: new Date().toISOString(),
        },
      },
    };

    // Add team size if present
    if (answers.team_size !== undefined && answers.team_size !== null) {
      properties.TeamSize = {
        number: Number(answers.team_size),
      };
    }

    // Add project complexity if present - map funnel values to Notion options
    if (answers.project_complexity) {
      const complexityMapping = {
        'validation': 'Validation',
        'development': 'Development', 
        'enterprise': 'Enterprise'
      };
      
      properties.ProjectComplexity = {
        select: {
          name: complexityMapping[answers.project_complexity] || answers.project_complexity,
        },
      };
    }

    // Add subscription plan (from budget field) if present - map funnel values to Notion options
    if (answers.budget) {
      const budgetMapping = {
        'essential': 'Essential',
        'growth': 'Growth', 
        'premium': 'Premium',
        'enterprise': 'Enterprise'
      };
      
      properties.SubscriptionPlan = {
        select: {
          name: budgetMapping[answers.budget] || answers.budget,
        },
      };
    }

    // Add timeline if present - map funnel values to Notion options
    if (answers.timeline) {
      const timelineMapping = {
        'urgent': 'Urgent',
        'standard': 'Standard', 
        'planned': 'Planned',
        'flexible': 'Flexible'
      };
      
      properties.Timeline = {
        select: {
          name: timelineMapping[answers.timeline] || answers.timeline,
        },
      };
    }

    // Add support level if present - map funnel values to Notion options
    if (answers.support_level) {
      const supportMapping = {
        'basic': 'Basic',
        'standard': 'Standard', 
        'premium': 'Premium',
        'dedicated': 'Dedicated'
      };
      
      properties.SupportLevel = {
        select: {
          name: supportMapping[answers.support_level] || answers.support_level,
        },
      };
    }

    // Add recommended plan if present
    if (answers.recommendation) {
      properties.RecommendedPlan = {
        select: {
          name: answers.recommendation,
        },
      };
    }

    // Always add raw answers for debugging
    properties.RawAnswers = {
      rich_text: [
        {
          text: {
            content: JSON.stringify(answers, null, 2).substring(0, 2000), // Notion has text limits
          },
        },
      ],
    };

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties,
    });

    return { 
      success: true, 
      refId, 
      pageId: response.id 
    };
  } catch (error) {
    console.error('Error creating Notion page:', error);
    console.error('Error details:', error.body || error.message);
    throw new Error('Failed to create submission in Notion');
  }
};

// Find a page by refId
export const findPageByRefId = async (refId) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'RefId',
        title: {
          equals: refId,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    return response.results[0];
  } catch (error) {
    console.error('Error finding Notion page:', error);
    throw new Error('Failed to find page in Notion');
  }
};

// Check if booking already exists (idempotency)
export const isBookingProcessed = async (bookingId) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'BookingId',
        rich_text: {
          equals: bookingId,
        },
      },
    });

    return response.results.length > 0;
  } catch (error) {
    console.error('Error checking booking:', error);
    return false;
  }
};

// Update page with booking details
export const updatePageWithBooking = async (pageId, bookingDetails) => {
  try {
    // Start with just the Status update - this is the most critical
    const properties = {
      Status: {
        select: {
          name: 'Booked',
        },
      },
    };

    // Add optional fields only if they have values
    if (bookingDetails.bookingId) {
      properties.BookingId = {
        rich_text: [
          {
            text: {
              content: bookingDetails.bookingId,
            },
          },
        ],
      };
    }

    if (bookingDetails.start) {
      properties.BookingStart = {
        date: {
          start: bookingDetails.start,
        },
      };
    }

    if (bookingDetails.end) {
      properties.BookingEnd = {
        date: {
          start: bookingDetails.end,
        },
      };
    }

    if (bookingDetails.inviteeEmail) {
      properties.InviteeEmail = {
        email: bookingDetails.inviteeEmail,
      };
    }

    if (bookingDetails.eventType) {
      properties.EventType = {
        rich_text: [
          {
            text: {
              content: bookingDetails.eventType,
            },
          },
        ],
      };
    }

    // Always add BookedAt timestamp
    properties.BookedAt = {
      date: {
        start: new Date().toISOString(),
      },
    };

    console.log('Updating Notion page:', pageId, 'with properties:', properties);

    const response = await notion.pages.update({
      page_id: pageId,
      properties,
    });

    return { success: true, pageId: response.id };
  } catch (error) {
    console.error('Error updating Notion page with booking:', error);
    console.error('Error details:', error.body || error.message);
    throw new Error('Failed to update booking in Notion');
  }
};

// Log webhook processing attempts
export const logWebhookAttempt = async (webhookData, status, error = null) => {
  try {
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_WEBHOOK_LOG_DATABASE_ID || databaseId,
      },
      properties: {
        WebhookId: {
          title: [
            {
              text: {
                content: webhookData.id || 'unknown',
              },
            },
          ],
        },
        Status: {
          select: {
            name: status, // 'success', 'failed', 'retry'
          },
        },
        EventType: {
          rich_text: [
            {
              text: {
                content: webhookData.event || 'unknown',
              },
            },
          ],
        },
        Payload: {
          rich_text: [
            {
              text: {
                content: JSON.stringify(webhookData, null, 2).substring(0, 2000),
              },
            },
          ],
        },
        Error: {
          rich_text: [
            {
              text: {
                content: error ? error.toString() : '',
              },
            },
          ],
        },
        ProcessedAt: {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });
  } catch (logError) {
    console.error('Failed to log webhook attempt:', logError);
  }
};