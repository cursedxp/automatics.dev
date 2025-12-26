"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePricingFunnel } from "../context/PricingFunnelContext";
import { useStepNavigation } from "../hooks/useStepNavigation";
import { useCurrentView, useGridLayout } from "../hooks/usePricingHooks";
import { animations } from "../config/animations";
import ViewFactory from "./ViewFactory";

const PricingCard = () => {
  const { state, dispatch } = usePricingFunnel();
  const handlers = useStepNavigation();
  const currentView = useCurrentView(state);
  const gridLayout = useGridLayout(state.showSidebar);

  return (
    <motion.article
      {...animations.card}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden relative"
      role="main"
      aria-label="Pricing options"
    >
      {/* Toggle Switch in top right corner - only show in table view */}
      {currentView === 'hide-forever' && (
        <div className="absolute top-8 right-8 z-20 group">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_DETAILS' })}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              state.showDetails ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
            aria-label="Toggle details"
            title="Toggle pricing details"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                state.showDetails ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          {/* Popover tooltip */}
          <div className="absolute right-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap shadow-lg">
              {state.showDetails ? 'Hide' : 'Show'} pricing details
              <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}

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