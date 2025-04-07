"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCalendar,
  HiClock,
  HiTag,
  HiArrowLeft,
} from "react-icons/hi";
import blogPost from "../../data/blog-post.json";

function getBlogPost(id) {
  return blogPost.find((post) => post.id === parseInt(id));
}

export default function BlogPostPage({ params }) {
  const resolvedParams = use(params);
  const post = getBlogPost(resolvedParams.id);
  const ref = useRef(null);

  if (!post) {
    return (
      <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 font-medium"
        >
          <HiChevronLeft className="mr-1 w-5 h-5" />
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20 xs:px-10">
      {/* Back to Blog Link */}
      <div className="w-full mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <HiArrowLeft className="mr-1 w-5 h-5" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header ref={ref} className="w-full mb-12 sm:mb-16 md:mb-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <HiCalendar className="mr-1 w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center">
              <HiClock className="mr-1 w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center">
              <HiTag className="mr-1 w-4 h-4" />
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-6 sm:mb-8 md:mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </figure>

      {/* Article Content */}
      <article className="w-full max-w-4xl mx-auto prose prose-lg sm:prose-xl">
        {post.content.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p key={index} className="text-gray-600 mb-6">
                  {block.text}
                </p>
              );
            case "heading":
              return (
                <h2
                  key={index}
                  className="text-3xl font-bold text-gray-900 mb-6"
                >
                  {block.text}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="list-disc pl-6 mb-6 text-gray-600">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </article>
    </main>
  );
}
