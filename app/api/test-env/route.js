import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasNotionKey: !!process.env.NOTION_API_KEY,
    hasNotionDb: !!process.env.NOTION_DATABASE_ID,
    hasCalendlyToken: !!process.env.CALENDLY_PERSONAL_ACCESS_TOKEN,
    notionKeyPrefix: process.env.NOTION_API_KEY ? process.env.NOTION_API_KEY.substring(0, 7) : 'not set',
    notionDbPrefix: process.env.NOTION_DATABASE_ID ? process.env.NOTION_DATABASE_ID.substring(0, 8) : 'not set',
  });
}