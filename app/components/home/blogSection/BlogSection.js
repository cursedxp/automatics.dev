import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Digital Transformation",
    excerpt:
      "Understanding the critical role of digital transformation in modern businesses and key success factors...",
    image: "/assets/images/blog.jpg",
  },
  {
    id: 2,
    title: "AI and the Future of Business",
    excerpt:
      "How artificial intelligence is reshaping business processes and its impact on the future of work...",
    image: "/assets/images/blog.jpg",
  },
  {
    id: 3,
    title: "Customer Experience Optimization",
    excerpt:
      "Effective strategies and best practices for enhancing customer satisfaction and loyalty...",
    image: "/assets/images/blog.jpg",
  },
];

const BlogSection = () => {
  return (
    <section
      className="flex-col w-full gap-10 my-40"
      aria-labelledby="blog-heading"
    >
      <header className="text-center mb-12">
        <h2 id="blog-heading" className="text-6xl mb-8">
          Insights & Industry Updates
        </h2>
        <p className="text-center text-gray-500 px-30 text-xl mb-12">
          Stay informed with our latest insights, industry trends, and expert
          perspectives on technology, digital transformation, and business
          innovation.
        </p>
      </header>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        role="list"
      >
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl overflow-hidden group-hover:bg-black group-hover:text-white transition-all duration-300"
            role="listitem"
          >
            <figure className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
                aria-label={`Read more about ${post.title}`}
              >
                Read More
                <HiChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
