"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Technologies() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [categories, setCategories] = useState({});
  const [allTechnologies, setAllTechnologies] = useState([]);

  const categoryOrder = [
    { key: 'frontend', name: 'Frontend' },
    { key: 'backend', name: 'Backend' },
    { key: 'devops', name: 'DevOps' },
    { key: 'cms', name: 'CMS & Automation' },
    { key: 'ai', name: 'AI' },
    { key: 'ux', name: 'Design' },
    { key: 'payment', name: 'Payment' },
  ];

  useEffect(() => {
    try {
      const techJson = require("../../../data/technologies.json");
      setCategories(techJson);

      // Flatten all for scrolling section
      const allTechs = Object.values(techJson).flatMap(
        (category) => category.technologies
      );
      setAllTechnologies(allTechs);
    } catch (error) {
      console.error("Error loading technologies:", error);
    }
  }, []);

  // Early return while data is loading
  if (Object.keys(categories).length === 0) {
    return <div>Loading...</div>;
  }

  // Filter technologies that have valid logos for scrolling section
  const technologiesWithLogos = allTechnologies.filter((tech) => {
    const logoName = tech.logo.split("/").pop();
    const knownLogos = [
      "adobe-xd.svg",
      "aws.svg",
      "claude.svg",
      "contentful.svg",
      "docker.svg",
      "figma.svg",
      "firebase.svg",
      "framer.svg",
      "hubspot.svg",
      "mongodb.svg",
      "nextjs.svg",
      "nodejs.svg",
      "notion.svg",
      "openai.svg",
      "paypal.svg",
      "postgresql.svg",
      "react.svg",
      "sketch.svg",
      "strapi.svg",
      "stripe.svg",
      "tailwind.svg",
      "vercel.svg",
      "zapier.svg",
      "zendesk.svg",
    ];
    return knownLogos.includes(logoName);
  });

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechnologies = [
    ...technologiesWithLogos,
    ...technologiesWithLogos,
  ];

  return (
    <section className="flex flex-col items-center justify-center my-20 w-full overflow-hidden">
      <div className="text-center mb-12 px-10">
        <h2 className="mb-8 md:text-5xl lg:text-6xl sm:text-4xl text-5xl">
          Modern Tech Stack
        </h2>
        <p className="text-gray-500 text-xl md:max-w-4xl mx-auto mb-8">
          We use cutting-edge technologies to build robust and scalable
          solutions. Our tech stack is carefully chosen to ensure the best
          performance, maintainability, and user experience.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categoryOrder.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Selected Category Technologies */}
        <div className="w-full max-w-[1400px] mx-auto px-4">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {categories[selectedCategory]?.technologies.map((tech, techIndex) => (
              <span
                key={`${selectedCategory}-${tech.name}-${techIndex}`}
                className="text-base text-black"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Technologies */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 items-center"
          animate={{
            x: [0, -(100 + 24) * technologiesWithLogos.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: technologiesWithLogos.length * 2,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[100px] p-3 bg-white rounded-xl group transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-10 h-10 mb-2">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs font-semibold text-black text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
