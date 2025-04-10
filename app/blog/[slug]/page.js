import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiClock, HiTag } from "react-icons/hi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { getPostBySlug } from "@/app/hooks/usePost";

// Rich text renderer options
const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-600 mb-6">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{children}</h2>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-6 mb-6 text-gray-600">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal pl-6 mb-6 text-gray-600">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-2">{children}</li>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
  },
};

// Estimate read time
function calculateReadTime(content) {
  if (!content) return "1 min read";
  const wordsPerMinute = 200;
  const text = JSON.stringify(content);
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (!slug) {
    return (
      <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-4">Invalid Post</h1>
        <p className="text-gray-600 mb-8">No slug parameter provided.</p>
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 font-medium"
        >
          <HiArrowLeft className="mr-1 w-5 h-5" />
          Back to Blog
        </Link>
      </main>
    );
  }

  const post = await getPostBySlug(slug);

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
          <HiArrowLeft className="mr-1 w-5 h-5" />
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
      <header className="w-full mb-12 sm:mb-16 md:mb-10">
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
        {documentToReactComponents(post.content, renderOptions)}
      </article>
    </main>
  );
}
