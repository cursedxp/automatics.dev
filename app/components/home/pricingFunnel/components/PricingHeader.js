"use client";
import { motion } from "framer-motion";
import { animations } from "../config/animations";

const PricingHeader = () => (
  <motion.header
    {...animations.header}
    className="text-center my-20"
    role="banner"
  >
    <h2 className="text-6xl mb-4">Flexible Pricing</h2>
    <p className="text-gray-500 text-xl sm:px-10 max-w-4xl mx-auto">
      Our pricing is transparent, predictable, and scales with your needs.
      Subscribe to the number of parallel tasks, and submit unlimited requests
      to your project queue.
    </p>
  </motion.header>
);

export default PricingHeader;