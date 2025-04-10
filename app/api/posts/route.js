import { createClient } from "contentful";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    if (slug) {
      // Fetch a single post by slug
      const response = await client.getEntries({
        content_type: "blog",
        "fields.slug": slug,
        limit: 1,
      });

      if (response.items.length === 0) {
        return NextResponse.json(
          { message: "Post not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(response.items[0]);
    } else {
      // Fetch all posts
      const response = await client.getEntries({
        content_type: "blog",
        order: "-sys.createdAt",
      });

      return NextResponse.json(response.items);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Error fetching posts" },
      { status: 500 }
    );
  }
}
