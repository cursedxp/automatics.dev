"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "Customer-Facing Systems",
      description:
        "Self-service portals where customers, partners, or vendors can upload documents, request changes, and complete payments—synced with your internal systems.",
    },
    {
      title: "Internal Operations",
      description:
        "Role-based apps that replace spreadsheets, standardized workflows with clear handoffs, and dashboards that turn scattered data into decision-ready insights.",
    },
    {
      title: "Integration & Automation",
      description:
        "Connect your tools via APIs, automate repetitive steps, and add AI where it saves time—triage, enrichment, classification, summaries.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="flex flex-col items-center justify-center my-20"
    >
      <div className="w-full max-w-7xl">
        {/* Layout with Left Header and Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl sm:text-6xl mb-6">What we deliver</h2>
            <p className="text-gray-500 text-lg sm:text-xl">
              Complete solutions that connect your people, processes, and
              tools—not just isolated features.
            </p>
          </motion.div>

          {/* Right Side - Single Card containing all solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                return (
                  <div key={index}>
                    <h4 className="text-lg font-bold mb-3">{solution.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
