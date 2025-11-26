import { motion } from "framer-motion";
import PlanCard from "./PlanCard";
// import FindMyPlanCard from "./FindMyPlanCard";

export default function PricingTableContent({ plans, onLearnMore }) {
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
      {plans.map((plan, index) => (
        <PlanCard key={plan.name} plan={plan} index={index} plans={plans} />
      ))}
      {/* Find My Plan Card - Will be enabled in future */}
      {/* <FindMyPlanCard onLearnMore={onLearnMore} /> */}
    </motion.div>
  );
}