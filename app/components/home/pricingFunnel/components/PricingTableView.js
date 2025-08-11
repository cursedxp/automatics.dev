"use client";
import { motion } from "framer-motion";
import { PLANS_DATA } from "../constants";
import { animations } from "../config/animations";
import PricingTableContent from "./PricingTableContent";

const PricingTableView = ({ onLearnMore }) => (
  <motion.div
    key="pricing-table"
    {...animations.content}
    className="overflow-hidden"
    role="region"
    aria-label="Pricing plans"
  >
    <div className="p-8">
      <PricingTableContent 
        plans={PLANS_DATA} 
        onLearnMore={onLearnMore} 
      />
    </div>
  </motion.div>
);

export default PricingTableView;