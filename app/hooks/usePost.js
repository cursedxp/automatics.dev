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
    // Get the current origi
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await fetch(
      `${origin}/api/posts?slug=${encodeURIComponent(slug)}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch post");
    }

    const postData = await response.json();

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

export async function getAllPosts() {
  try {
    // Get the current origin (works in both browser and server environments)
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const response = await fetch(`${origin}/api/posts`);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    return posts.map((post) => ({
      title: post.fields.title,
      slug: post.fields.slug,
      excerpt: post.fields.excerpt,
      image: post.fields.coverImage?.fields?.file?.url
        ? `https:${post.fields.coverImage.fields.file.url}`
        : "/images/placeholder.jpg",
      date: new Date(post.sys.createdAt).toLocaleDateString(),
      readTime: calculateReadTime(post.fields.content),
      category: "Blog",
    }));
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw new Error("Failed to fetch posts");
  }
}
