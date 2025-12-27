"use client";
import { motion } from "framer-motion";
import { animations } from "../config/animations";

const PricingHeader = () => (
  <motion.header
    {...animations.header}
    className="text-center mb-20 mt-10"
    role="banner"
  >
    <h2 className="text-6xl mb-4">Pricing</h2>
    <p className="text-gray-500 text-xl sm:px-10 max-w-4xl mx-auto">
      Pick the level of support you need — a one-time audit, a build sprint, or
      ongoing delivery with clear capacity and guardrails.
    </p>
  </motion.header>
);

export default PricingHeader;
