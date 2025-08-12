import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function GET() {
  try {
    const apiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;
    
    // Check if environment variables are set
    if (!apiKey) {
      return NextResponse.json({ error: 'NOTION_API_KEY not found in environment variables' });
    }
    
    if (!databaseId) {
      return NextResponse.json({ error: 'NOTION_DATABASE_ID not found in environment variables' });
    }
    
    // Try to connect to Notion
    const notion = new Client({ auth: apiKey });
    
    // Try to retrieve the database
    const database = await notion.databases.retrieve({ database_id: databaseId });
    
    return NextResponse.json({
      success: true,
      message: 'Successfully connected to Notion!',
      databaseTitle: database.title[0]?.plain_text || 'Untitled',
      properties: Object.keys(database.properties),
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to connect to Notion',
      message: error.message,
      code: error.code,
      status: error.status,
    });
  }
}