// Direct test of Notion API
const { Client } = require('@notionhq/client');

// Hardcode your values here temporarily for testing
const NOTION_API_KEY = 'secret_YOUR_KEY_HERE'; // Replace with your actual key
const DATABASE_ID = '24ce28ab-3971-80cd-b355-f987c504b3f6';

async function testNotion() {
  console.log('Testing Notion connection...');
  console.log('Key starts with:', NOTION_API_KEY.substring(0, 10) + '...');
  console.log('Key length:', NOTION_API_KEY.length);
  
  try {
    const notion = new Client({ auth: NOTION_API_KEY });
    
    // Try to get user info first
    console.log('\n1. Testing authentication...');
    const users = await notion.users.list();
    console.log('✅ Authentication successful!');
    console.log('Found users:', users.results.length);
    
    // Try to access the database
    console.log('\n2. Testing database access...');
    const database = await notion.databases.retrieve({ 
      database_id: DATABASE_ID 
    });
    console.log('✅ Database found!');
    console.log('Database title:', database.title[0]?.plain_text || 'Untitled');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.code === 'unauthorized') {
      console.error('The API key is not valid or has been revoked.');
    } else if (error.code === 'object_not_found') {
      console.error('The database was not found or the integration doesn\'t have access.');
    }
  }
}

testNotion();