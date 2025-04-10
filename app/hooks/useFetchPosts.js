import { useState, useEffect } from "react";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // For Vercel and other deployment platforms, we need to use an absolute URL
        const host =
          typeof window !== "undefined"
            ? window.location.origin
            : process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

        const response = await fetch(`${host}/api/posts`);

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const items = await response.json();

        const transformedPosts = items.map((item) => {
          // Get the cover image URL if it exists
          const coverImageUrl = item.fields.coverImage?.fields?.file?.url
            ? `https:${item.fields.coverImage.fields.file.url}`
            : null;

          return {
            id: item.sys.id,
            title: item.fields.title || "",
            slug: item.fields.slug || "",
            excerpt: item.fields.excerpt || "",
            content: item.fields.content || "",
            image: coverImageUrl || "/images/placeholder.jpg", // Update this path to your actual placeholder image
            publishDate: new Date(item.sys.createdAt).toLocaleDateString(),
            isFeatured: false, // Since this field doesn't exist in your content model
          };
        });

        console.log("Transformed posts:", transformedPosts);
        setPosts(transformedPosts);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, isLoading, error };
};
