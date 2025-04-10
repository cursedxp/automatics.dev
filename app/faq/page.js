"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronDown, HiPhone } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import faqData from "@/app/data/faq.json";

export default function FaqPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20 px-4">
      <motion.header className="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-center mb-6 sm:mb-8 md:mb-10 text-4xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            {faqData.title}
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto px-4"
        >
          {faqData.description}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <Link
            href={faqData.cta.href}
            className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer"
          >
            <HiPhone className="w-4 h-4" />
            {faqData.cta.text}
          </Link>
        </motion.div>
      </motion.header>

      <section className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-4 bg-white rounded-2xl p-8"
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
                    className="mt-4 text-gray-500"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
