import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(request) {
  const debugInfo = {
    timestamp: new Date().toISOString(),
    envVars: {
      hasNotionKey: !!process.env.NOTION_API_KEY,
      hasNotionDb: !!process.env.NOTION_DATABASE_ID,
      notionKeyPrefix: process.env.NOTION_API_KEY?.substring(0, 7),
      notionDbPrefix: process.env.NOTION_DATABASE_ID?.substring(0, 8),
    },
    steps: []
  };

  try {
    // Step 1: Parse request
    const body = await request.json();
    debugInfo.steps.push({ step: 'parse_body', success: true });
    
    // Step 2: Extract refId
    let refId = null;
    
    // Check multiple locations for refId
    const locations = [
      { path: 'payload.tracking.utm_campaign', value: body.payload?.tracking?.utm_campaign },
      { path: 'payload.payload.tracking.utm_campaign', value: body.payload?.payload?.tracking?.utm_campaign },
      { path: 'payload.invitee.tracking.utm_campaign', value: body.payload?.invitee?.tracking?.utm_campaign },
      { path: 'tracking.utm_campaign', value: body.tracking?.utm_campaign },
    ];
    
    for (const loc of locations) {
      if (loc.value) {
        refId = loc.value;
        debugInfo.steps.push({ step: 'found_refid', location: loc.path, refId });
        break;
      }
    }
    
    if (!refId) {
      debugInfo.steps.push({ step: 'no_refid', locations_checked: locations });
      return NextResponse.json({ error: 'No refId found', debugInfo });
    }
    
    // Step 3: Initialize Notion client
    const notion = new Client({
      auth: process.env.NOTION_API_KEY,
    });
    debugInfo.steps.push({ step: 'notion_client_created', success: true });
    
    // Step 4: Find page by refId
    const queryResponse = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'RefId',
        title: {
          equals: refId,
        },
      },
    });
    
    debugInfo.steps.push({ 
      step: 'notion_query', 
      success: true, 
      results_count: queryResponse.results.length 
    });
    
    if (queryResponse.results.length === 0) {
      return NextResponse.json({ 
        error: 'No page found', 
        refId,
        debugInfo 
      });
    }
    
    const page = queryResponse.results[0];
    debugInfo.steps.push({ 
      step: 'page_found', 
      pageId: page.id 
    });
    
    // Step 5: Update page status
    const updateResponse = await notion.pages.update({
      page_id: page.id,
      properties: {
        Status: {
          select: {
            name: 'Booked',
          },
        },
      },
    });
    
    debugInfo.steps.push({ 
      step: 'page_updated', 
      success: true,
      pageId: updateResponse.id 
    });
    
    return NextResponse.json({
      success: true,
      message: 'Status updated to Booked',
      refId,
      pageId: page.id,
      debugInfo
    });
    
  } catch (error) {
    debugInfo.error = {
      message: error.message,
      stack: error.stack,
      body: error.body,
    };
    
    return NextResponse.json({
      success: false,
      error: error.message,
      debugInfo
    });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Debug webhook endpoint ready',
    env: {
      hasNotionKey: !!process.env.NOTION_API_KEY,
      hasNotionDb: !!process.env.NOTION_DATABASE_ID,
    }
  });
}