"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = {
  frontend: {
    name: "Frontend",
    technologies: [
      {
        name: "Next.js",
        description: "React framework for production",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "Framer",
        description: "Animation library",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "React",
        description: "UI library for web",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind",
        description: "Utility-first CSS",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  backend: {
    name: "Backend",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "MongoDB",
        description: "NoSQL database",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        description: "SQL database",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  cms: {
    name: "CMS",
    technologies: [
      {
        name: "Contentful",
        description: "Headless CMS platform",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "Sanity.io",
        description: "Real-time content platform",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Strapi",
        description: "Open-source headless CMS",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "Prismic",
        description: "Headless CMS solution",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  payment: {
    name: "Payment",
    technologies: [
      {
        name: "Stripe",
        description: "Payment processing",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "PayPal",
        description: "Digital payments",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: "Square",
        description: "Payment solutions",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
      {
        name: "iZettle",
        description: "Payment services",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  devops: {
    name: "DevOps",
    technologies: [
      {
        name: "Docker",
        description: "Container platform",
        logo: (
          <svg className="w-16 h-16" viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="4"
              fill="currentColor"
            />
          </svg>
        ),
      },
    ],
  },
};

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section className="flex flex-col items-center justify-center my-20 px-10">
      <div className="text-center mb-12">
        <h2 className="mb-8 md:text-5xl lg:text-6xl sm:text-4xl text-5xl">
          Modern Tech Stack
        </h2>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto">
          We use cutting-edge technologies to build robust and scalable
          solutions. Our tech stack is carefully chosen to ensure the best
          performance, maintainability, and user experience.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === key
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories[activeCategory].technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl group transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-black">{tech.logo}</div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
