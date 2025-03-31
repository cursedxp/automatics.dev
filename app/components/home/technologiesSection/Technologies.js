"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import techData from "../../../data/technologies";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("cms");
  const [technologies, setTechnologies] = useState({});

  useEffect(() => {
    try {
      const techJson = require("../../../data/technologies.json");
      setTechnologies(techJson);
    } catch (error) {
      console.error("Error loading technologies:", error);
    }
  }, []);

  // Early return while data is loading
  if (!technologies || Object.keys(technologies).length === 0) {
    return <div>Loading...</div>;
  }

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
          {Object.entries(technologies).map(([key, category]) => (
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
          {technologies[activeCategory].technologies.map((tech, index) => (
            <div
              key={`${activeCategory}-${tech.name}-${index}`}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl group transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
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
