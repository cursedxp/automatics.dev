"use client";
import { motion } from "framer-motion";
import { FUNNEL_QUESTIONS } from "../constants";
import { animations } from "../config/animations";
import FunnelStepContent from "./FunnelStepContent";
import PricingModelSidebar from "./PricingModelSidebar";

const FunnelView = ({ state, gridLayout }) => {
  const currentQuestion = FUNNEL_QUESTIONS[state.currentStep];
  const stepInfo = {
    question: currentQuestion,
    stepNumber: state.currentStep + 1,
    totalSteps: FUNNEL_QUESTIONS.length,
  };

  return (
    <motion.div
      key="pricing-funnel"
      {...animations.content}
      className={gridLayout.gridClass}
      role="region"
      aria-label="Pricing questionnaire"
    >
      <div className={gridLayout.contentClass}>
        <FunnelStepContent {...stepInfo} />
      </div>
      {state.showSidebar && <PricingModelSidebar />}
    </motion.div>
  );
};

export default FunnelView;