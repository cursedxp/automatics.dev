"use client";

import Link from "next/link";
import { HiChevronDown, HiPhone } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

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

  const faqItems = [
    {
      question:
        "Do you offer fully customized solutions or use pre-made tools?",
      answer:
        "We specialize in fully tailored solutions, but when it makes sense, we integrate proven tools like Contentful, Firebase, or Stripe to speed up delivery and reduce costs—always with your needs in mind.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines depend on complexity, but most of our builds range from 2 to 6 weeks. We'll give you a clear timeline after our initial discovery call.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "Yes. We offer ongoing support plans tailored to your project, including updates, improvements, and troubleshooting—so you're never left on your own.",
    },
    {
      question: "Can you integrate with our existing systems or tools?",
      answer:
        "Absolutely. We can integrate with your existing systems or tools, ensuring a seamless transition and smooth operation.",
    },
    {
      question: "Do I need to know anything technical to work with you?",
      answer:
        "No, you don't need to be a tech expert. We adapt to your workflow and needs, whether you're technical or not.",
    },
  ];

  return (
    <section
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
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-xl">
          We&apos;re here to help. Our team of experts is ready to assist you
          with any questions about our services, or business solutions. We aim
          to respond within 24 hours on business days.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer w-fit mt-8"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-col w-full sm:w-1/2 space-y-4 bg-white rounded-2xl p-8 sm:w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {faqItems.map((item, index) => (
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
