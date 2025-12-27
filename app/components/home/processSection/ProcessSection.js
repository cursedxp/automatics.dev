"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const processSteps = [
    {
      title: "Plan",
      description:
        "We start by mapping how work actually flows today (lead → deal → delivery → invoice), where it breaks, and what it costs you. We agree on a clear outcome and 1–3 numbers to improve, then turn that into a short, prioritized backlog.",
    },
    {
      title: "Build",
      description:
        "We implement the solution: workflows, automations, integrations, and the internal or customer-facing apps needed to make the process run end-to-end. You get a live view of progress, decisions, and what's next — with minimal overhead on your side.",
    },
    {
      title: "Ship",
      description:
        "We roll out the changes and help your team adopt them. Every cycle includes a shipped improvement and a short changelog. Once per month we review results, adjust priorities, and pick the next highest-impact move.",
    },
  ];

  return (
    <section ref={ref} className="flex flex-col w-full gap-8 my-10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Layout with Left Card and Right Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
          {/* Left Side - Single Card containing all process steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-start">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl sm:text-6xl mb-6">How we work</h2>
            <p className="text-gray-500 text-lg sm:text-xl">
              We keep it simple: pick the highest-impact problem, ship an
              improvement fast, then measure what changed. You get momentum
              without constant meetings.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
