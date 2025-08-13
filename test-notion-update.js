const { Client } = require('@notionhq/client');

// Use environment variables for sensitive data
const NOTION_API_KEY = process.env.NOTION_API_KEY || 'your_notion_api_key_here';
const NOTION_DATABASE_ID = '24ce28ab-3971-80cd-b355-f987c504b3f6';

// Initialize Notion client
const notion = new Client({
  auth: NOTION_API_KEY,
});

async function updateNotionStatus(refId, status) {
  try {
    console.log(`🔧 Updating Notion status for refId: ${refId} to: ${status}`);
    
    // Search for the page with the refId
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: 'Ref ID',
        rich_text: {
          equals: refId
        }
      }
    });

    if (response.results.length === 0) {
      console.log(`❌ No page found with refId: ${refId}`);
      return false;
    }

    const pageId = response.results[0].id;
    console.log(`✅ Found page with ID: ${pageId}`);

    // Update the Status property
    await notion.pages.update({
      page_id: pageId,
      properties: {
        'Status': {
          select: {
            name: status
          }
        }
      }
    });

    console.log(`✅ Successfully updated status to: ${status}`);
    return true;
  } catch (error) {
    console.error('❌ Error updating Notion:', error.message);
    return false;
  }
}

// Test function
async function testUpdate() {
  const refId = process.argv[2] || 'ref_me8jwdnt_c0ff44a6';
  const status = process.argv[3] || 'Booked';
  
  console.log('🧪 Testing Notion Update');
  console.log('========================');
  console.log(`Ref ID: ${refId}`);
  console.log(`Status: ${status}`);
  console.log('');

  const success = await updateNotionStatus(refId, status);
  
  if (success) {
    console.log('🎉 Test completed successfully!');
  } else {
    console.log('💥 Test failed!');
    process.exit(1);
  }
}

// Run test if called directly
if (require.main === module) {
  testUpdate();
}

module.exports = { updateNotionStatus };
