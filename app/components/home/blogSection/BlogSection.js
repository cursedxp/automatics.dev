"use client";

import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useFetchPosts } from "@/app/hooks/useFetchPosts";

export default function BlogSection() {
  const { posts, isLoading, error } = useFetchPosts();

  // Filter to get only the latest 3 posts
  const blogPosts = posts.slice(0, 3);

  if (isLoading) {
    return (
      <section className="flex-col w-full gap-10 my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
        <header className="text-center mb-12">
          <h2 className="text-6xl mb-8">Insights & Industry Updates</h2>
          <p className="text-center text-gray-500 text-xl mb-12">
            Stay informed with our latest insights, industry trends, and expert
            perspectives on technology, digital transformation, and business
            innovation.
          </p>
        </header>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex-col w-full gap-10 my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
        <header className="text-center mb-12">
          <h2 className="text-6xl mb-8">Insights & Industry Updates</h2>
          <p className="text-center text-gray-500 text-xl mb-12">
            Stay informed with our latest insights, industry trends, and expert
            perspectives on technology, digital transformation, and business
            innovation.
          </p>
        </header>
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500 text-lg max-w-4xl border border-red-300 rounded-md p-4">
            Error loading posts: {error}
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return null;
  }

  return (
    <section
      className="flex-col w-full gap-10 my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10"
      aria-labelledby="blog-heading"
    >
      <header className="text-center mb-12">
        <h2 id="blog-heading" className="text-6xl mb-8">
          Insights & Industry Updates
        </h2>
        <p className="text-center text-gray-500 text-xl mb-12">
          Stay informed with our latest insights, industry trends, and expert
          perspectives on technology, digital transformation, and business
          innovation.
        </p>
      </header>

      <div
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-4"
        role="list"
      >
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block h-full group"
            aria-label={`Read more about ${post.title}`}
          >
            <article
              className="bg-white rounded-2xl overflow-hidden group-hover:bg-black group-hover:text-white transition-all duration-300 cursor-pointer h-full flex flex-col"
              role="listitem"
            >
              <figure className="relative h-48 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </figure>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-300 flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
