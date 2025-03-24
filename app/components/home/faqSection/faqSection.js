"use client";

import Link from "next/link";
import { HiChevronDown, HiPhone } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="flex w-full gap-10 my-20">
      <motion.div
        className="flex flex-col w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-6xl mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-xl">
          We&apos;re here to help. Our team of experts is ready to assist you
          with any questions about our services, or business solutions. We aim
          to respond within 24 hours on business days.
        </p>
        <Link
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer w-fit mt-4"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </Link>
      </motion.div>
      <motion.div
        className="flex flex-col w-1/2 space-y-4 bg-white rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <details className="pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
            Do you offer fully customized solutions or use pre-made tools?
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5"
            >
              <HiChevronDown />
            </motion.div>
          </summary>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              We specialize in fully tailored solutions, but when it makes
              sense, we integrate proven tools like Contentful, Firebase, or
              Stripe to speed up delivery and reduce costs—always with your
              needs in mind.
            </motion.p>
          </AnimatePresence>
        </details>
        <details className="pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
            How long does a typical project take?
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5"
            >
              <HiChevronDown />
            </motion.div>
          </summary>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              Project timelines depend on complexity, but most of our builds
              range from 2 to 6 weeks. We&apos;ll give you a clear timeline
              after our initial discovery call.
            </motion.p>
          </AnimatePresence>
        </details>
        <details className="pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
            Do you provide post-launch support and maintenance?
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5"
            >
              <HiChevronDown />
            </motion.div>
          </summary>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              Yes. We offer ongoing support plans tailored to your project,
              including updates, improvements, and troubleshooting—so
              you&apos;re never left on your own.
            </motion.p>
          </AnimatePresence>
        </details>
        <details className="pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
            Can you integrate with our existing systems or tools?
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5"
            >
              <HiChevronDown />
            </motion.div>
          </summary>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              Absolutely. We can integrate with your existing systems or tools,
              ensuring a seamless transition and smooth operation.
            </motion.p>
          </AnimatePresence>
        </details>
        <details className="pb-4">
          <summary className="flex items-center justify-between cursor-pointer text-lg font-medium">
            Do I need to know anything technical to work with you?
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5"
            >
              <HiChevronDown />
            </motion.div>
          </summary>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              No, you don&apos;t need to be a tech expert. We adapt to your
              workflow and needs, whether you&apos;re technical or not.
            </motion.p>
          </AnimatePresence>
        </details>
      </motion.div>
    </section>
  );
}
