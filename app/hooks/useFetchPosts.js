import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "blog",
          order: "-sys.createdAt",
        });

        const transformedPosts = response.items.map((item) => {
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
