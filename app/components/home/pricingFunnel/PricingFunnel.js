"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PricingLayout from "./components/PricingLayout";
import PricingHeader from "./components/PricingHeader";
import PricingTableContent from "./components/PricingTableContent";
import { PLANS_DATA } from "./constants";

const PricingFunnel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PricingLayout>
      <PricingHeader />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl overflow-hidden p-8"
      >
        <PricingTableContent plans={PLANS_DATA} />
      </motion.div>
    </PricingLayout>
  );
};

export default PricingFunnel;