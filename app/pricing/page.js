"use client";

import { motion } from "framer-motion";
import PricingSection from "../components/home/pricingSection/pricingSection";

export default function PricingPage() {
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
            Choose Your Path
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto px-4"
        >
          Select the perfect plan that aligns with your project needs and
          timeline
        </motion.p>
      </motion.header>

      <PricingSection hideHeader={true} />
    </main>
  );
}
