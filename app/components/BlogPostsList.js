"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Number of posts to load initially and on each scroll
const POSTS_PER_LOAD = 6;

export default function BlogPostsList({ initialPosts }) {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  // Initialize visible posts
  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      console.log(
        "Setting visible posts with:",
        initialPosts.slice(0, POSTS_PER_LOAD)
      );
      setVisiblePosts(initialPosts.slice(0, POSTS_PER_LOAD));
      setHasMore(initialPosts.length > POSTS_PER_LOAD);
    }
  }, [initialPosts]);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !isLoading) {
        loadMorePosts();
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, loadMorePosts]);

  // Function to load more posts
  const loadMorePosts = () => {
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const currentLength = visiblePosts.length;
      const nextPosts = initialPosts.slice(
        currentLength,
        currentLength + POSTS_PER_LOAD
      );

      setVisiblePosts((prevPosts) => [...prevPosts, ...nextPosts]);
      setHasMore(currentLength + POSTS_PER_LOAD < initialPosts.length);
      setIsLoading(false);
    }, 500);
  };

  if (!initialPosts || initialPosts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500 text-lg max-w-4xl border border-gray-300 rounded-md p-4">
          No posts found
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {visiblePosts.map((post, index) => (
          <Link
            key={`${post.id}-${index}`}
            href={`/blog/${post.slug}`}
            className="block"
            aria-label={`Read more about ${post.title}`}
          >
            <article
              className="group hover:bg-black rounded-2xl hover:text-white transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
              role="listitem"
            >
              <figure className="relative h-48 md:h-96 md:w-1/2 flex-shrink-0 md:mr-6 rounded-2xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </figure>
              <div className="flex flex-col flex-grow md:w-2/3 pt-4 md:pt-0">
                <span className="text-sm text-gray-500 mb-2 xs:my-2 sm:my-4">
                  {post.publishDate}
                </span>
                {post.isFeatured && (
                  <span className="inline-block text-white bg-black group-hover:bg-white group-hover:text-black text-xs px-3 py-2 rounded-md mb-4 border w-fit">
                    Featured
                  </span>
                )}
                <h3 className="text-4xl text-gray-900 group-hover:text-white mb-4">
                  {post.title}
                </h3>
                <p className="text-black group-hover:text-gray-300 line-clamp-4">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Loading indicator and intersection observer target */}
      {hasMore && (
        <div ref={loadMoreRef} className="w-full py-8 text-center">
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
