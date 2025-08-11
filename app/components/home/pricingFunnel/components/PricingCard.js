"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePricingFunnel } from "../context/PricingFunnelContext";
import { useStepNavigation } from "../hooks/useStepNavigation";
import { useCurrentView, useGridLayout } from "../hooks/usePricingHooks";
import { animations } from "../config/animations";
import ViewFactory from "./ViewFactory";

const PricingCard = () => {
  const { state } = usePricingFunnel();
  const handlers = useStepNavigation();
  const currentView = useCurrentView(state);
  const gridLayout = useGridLayout(state.showSidebar);

  return (
    <motion.article
      {...animations.card}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
      role="main"
      aria-label="Pricing options"
    >
      <AnimatePresence mode="wait">
        <ViewFactory 
          viewType={currentView}
          state={state}
          handlers={handlers}
          gridLayout={gridLayout}
        />
      </AnimatePresence>
    </motion.article>
  );
};

export default PricingCard;