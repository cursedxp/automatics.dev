"use client";
import { motion, AnimatePresence } from "framer-motion";
import { PLANS_DATA, FUNNEL_QUESTIONS } from "./constants";
import {
  PricingFunnelProvider,
  usePricingFunnel,
} from "./context/PricingFunnelContext";
import { useStepNavigation } from "./hooks/useStepNavigation";
import PricingTableContent from "./components/PricingTableContent";
import FunnelStepContent from "./components/FunnelStepContent";
import ResultScreenContent from "./components/ResultScreenContent";
import PricingModelSidebar from "./components/PricingModelSidebar";

function Header() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center my-20"
    >
      <h2 className="text-6xl mb-4">Flexible Pricing</h2>
      <p className="text-gray-500 text-xl sm:px-10 max-w-4xl mx-auto">
        Our pricing is transparent, predictable, and scales with your needs.
        Subscribe to the number of parallel tasks, and submit unlimited requests
        to your project queue.
      </p>
    </motion.div>
  );
}

function FunnelCard() {
  const { state } = usePricingFunnel();
  const { handleLearnMore, handleRestart } = useStepNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!state.showFunnel && !state.showResult ? (
          <motion.div
            key="table"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8">
              <PricingTableContent
                plans={PLANS_DATA}
                onLearnMore={handleLearnMore}
              />
            </div>
          </motion.div>
        ) : state.showResult ? (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ResultScreenContent
              recommendation={state.recommendation}
              plans={PLANS_DATA}
              onRestart={handleRestart}
            />
          </motion.div>
        ) : (
          <motion.div
            key="funnel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`grid grid-cols-1 ${
              state.showSidebar ? "lg:grid-cols-3" : "lg:grid-cols-1"
            }`}
          >
            <div
              className={state.showSidebar ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <FunnelStepContent
                question={FUNNEL_QUESTIONS[state.currentStep]}
                stepNumber={state.currentStep + 1}
                totalSteps={FUNNEL_QUESTIONS.length}
              />
            </div>
            {state.showSidebar && <PricingModelSidebar />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PricingFunnelContent() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full my-20"
    >
      <div className="max-w-7xl mx-auto w-full px-8">
        <Header />
        <FunnelCard />
      </div>
    </section>
  );
}

export default function PricingFunnel() {
  return (
    <PricingFunnelProvider>
      <PricingFunnelContent />
    </PricingFunnelProvider>
  );
}
