import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

// Estimate read time
function calculateReadTime(content) {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const text = JSON.stringify(content);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getPostBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const postData = response.items[0];
    return {
      title: postData.fields.title,
      slug: postData.fields.slug,
      content: postData.fields.content,
      excerpt: postData.fields.excerpt,
      image: postData.fields.coverImage?.fields?.file?.url
        ? `https:${postData.fields.coverImage.fields.file.url}`
        : "/images/placeholder.jpg",
      date: new Date(postData.sys.createdAt).toLocaleDateString(),
      readTime: calculateReadTime(postData.fields.content),
      category: "Blog",
    };
  } catch (err) {
    console.error("Error fetching post:", err);
    throw new Error("Failed to fetch post");
  }
}
