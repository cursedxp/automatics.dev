"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function QuoteSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      className="flex-col w-full gap-10 my-24"
      aria-label="Inspirational Quote"
      initial={{ filter: "blur(10px)", y: 50 }}
      animate={isInView && { filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <blockquote
        className="text-center text-5xl w-2/3 mx-auto"
        itemScope
        itemType="https://schema.org/Quotation"
      >
        <p className="block font-playfair-display leading-16" itemProp="text">
          Technology like art is a soaring exercise of the human imagination.
        </p>
        <cite className="text-gray-500 text-xl" itemProp="author">
          - Daniel Bell
        </cite>
      </blockquote>
    </motion.section>
  );
}
