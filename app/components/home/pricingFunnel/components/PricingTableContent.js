import { motion } from "framer-motion";
import PlanCard from "./PlanCard";

export default function PricingTableContent({ plans }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px",
      }}
      transition={{
        staggerChildren: 0.2,
      }}
      className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
    >
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </motion.div>
  );
}