"use client";

import { HiChevronDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import faqData from "@/app/data/faq.json";

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="flex flex-col gap-8 sm:flex-col md:flex-col lg:flex-row lg:gap-4 w-full my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10"
    >
      <motion.div
        className="flex flex-col sm:w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="md:text-5xl lg:text-6xl sm:text-4xl text-6xl mb-8">
          {faqData.title}
        </h2>
        <p className="text-gray-500 text-xl">{faqData.description}</p>
      </motion.div>
      <motion.div
        className="flex flex-col w-full space-y-4 bg-white rounded-2xl p-8 sm:w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {faqData.items.map((item, index) => (
          <div key={index} className="pb-4">
            <div
              className="flex items-center justify-between cursor-pointer text-lg font-medium"
              onClick={() => toggleItem(index)}
            >
              {item.question}
              <motion.div
                animate={{ rotate: openItems[index] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
              >
                <HiChevronDown />
              </motion.div>
            </div>
            <AnimatePresence>
              {openItems[index] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
