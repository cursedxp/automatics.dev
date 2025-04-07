"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import blogPostsData from "../data/blog-posts.json";

// Number of posts to load initially and on each scroll
const POSTS_PER_LOAD = 6;

export default function BlogPage() {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  // Initialize visible posts
  useEffect(() => {
    setVisiblePosts(blogPostsData.slice(0, POSTS_PER_LOAD));
    setHasMore(blogPostsData.length > POSTS_PER_LOAD);
  }, []);

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
  }, [hasMore, isLoading]);

  // Function to load more posts
  const loadMorePosts = () => {
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const currentLength = visiblePosts.length;
      const nextPosts = blogPostsData.slice(
        currentLength,
        currentLength + POSTS_PER_LOAD
      );

      setVisiblePosts((prevPosts) => [...prevPosts, ...nextPosts]);
      setHasMore(currentLength + POSTS_PER_LOAD < blogPostsData.length);
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20 px-10 xs:px-10">
      <header className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20 w-full">
        <h1 className="mb-6 sm:mb-8 md:mb-10 text-4xl sm:text-7xl md:text-7xl lg:text-8xl xs:text-6xl">
          <span className="text-center">Updates & Insights</span>
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl px-30 xs:px-0 xs:text-center sm:text-center md:text-center max-w-4xl">
          Discover insights on technology, digital transformation, and
          strategies to grow your business. Get the latest ThoughtLink updates
          and expert tips delivered straight to your inbox.
        </p>
      </header>

      {/* Blog Posts List */}
      <section className="w-full">
        <div className="flex flex-col gap-24 max-w-7xl mx-auto">
          {visiblePosts.map((post, index) => (
            <Link
              key={`${post.id}-${index}`}
              href={`/blog/${post.id}`}
              className="block"
              aria-label={`Read more about ${post.title}`}
            >
              <article
                className="group-hover:bg-black group-hover:text-white transition-all duration-300 cursor-pointer flex flex-col md:flex-row"
                role="listitem"
              >
                <figure className="relative h-48 md:h-96 md:w-1/2 flex-shrink-0 md:mr-6 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="flex flex-col flex-grow md:w-2/3">
                  <span className="text-sm text-gray-500 mb-2 xs:my-2 sm:my-4">
                    {post.date}
                  </span>
                  <span className="inline-block text-white bg-black text-xs px-3 py-2 rounded-md mb-8 border  w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-4xl text-gray-900 group-hover:text-white mb-4">
                    {post.title}
                  </h3>
                  <p className="text-black mb-4 group-hover:text-gray-300 line-clamp-4 ">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Loading indicator and intersection observer target */}
        <div ref={loadMoreRef} className="w-full py-8 text-center">
          {isLoading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 black"></div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
