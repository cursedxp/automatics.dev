import Image from "next/image";
import Link from "next/link";
import { getAllPostsServer } from "@/app/lib/contentful";
import BlogPostsList from "@/app/components/BlogPostsList";

export const metadata = {
  title: "Blog | ThoughtLink",
  description: "Updates and insights from ThoughtLink",
};

export default async function BlogPage() {
  const posts = await getAllPostsServer();

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

      {/* Blog Posts List with infinite scroll as client component */}
      <section className="w-full">
        <BlogPostsList initialPosts={posts} />
      </section>
    </main>
  );
}
