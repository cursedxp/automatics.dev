import { createClient } from "contentful";

// Server-side Contentful client
export const getContentfulClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export async function getPostBySlugServer(slug) {
  try {
    const client = getContentfulClient();
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

// Get all posts - for server components
export async function getAllPostsServer() {
  try {
    const client = getContentfulClient();
    const response = await client.getEntries({
      content_type: "blog",
      order: "-sys.createdAt",
    });

    return response.items.map((post) => ({
      id: post.sys.id,
      title: post.fields.title || "",
      slug: post.fields.slug || "",
      excerpt: post.fields.excerpt || "",
      content: post.fields.content || "",
      image: post.fields.coverImage?.fields?.file?.url
        ? `https:${post.fields.coverImage.fields.file.url}`
        : "/images/placeholder.jpg",
      publishDate: new Date(post.sys.createdAt).toLocaleDateString(),
      readTime: calculateReadTime(post.fields.content),
      isFeatured: false,
      category: "Blog",
    }));
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw new Error("Failed to fetch posts");
  }
}

// Estimate read time
function calculateReadTime(content) {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const text = JSON.stringify(content);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
