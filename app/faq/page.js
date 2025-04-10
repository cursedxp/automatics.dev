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
    <div className="flex flex-col max-w-screen-xl mx-auto items-center h-full">
      <section className="flex flex-col items-center justify-center my-20 px-10 sm:px-0 w-full max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl mb-4">{faqData.title}</h2>
          <p className="text-gray-500 text-xl sm:px-10 mb-8">
            {faqData.description}
          </p>
          <Link
            href={faqData.cta.href}
            className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer"
          >
            <HiPhone className="w-4 h-4" />
            {faqData.cta.text}
          </Link>
        </motion.div>

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
    </div>
  );
}
