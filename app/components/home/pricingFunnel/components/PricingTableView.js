"use client";
import { motion, AnimatePresence } from "framer-motion";
import { PLANS_DATA } from "../constants";
import { animations } from "../config/animations";
import PricingTableContent from "./PricingTableContent";
import { usePricingFunnel } from "../context/PricingFunnelContext";
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocument,
  HiOutlineArrowPath,
} from "react-icons/hi2";

const PricingTableView = () => {
  const { state } = usePricingFunnel();

  return (
    <motion.div
      key="pricing-table"
      {...animations.content}
      className="overflow-hidden"
      role="region"
      aria-label="Pricing plans"
    >
      <div className="p-8">
        <PricingTableContent plans={PLANS_DATA} />

        {/* Details Section - Shows below pricing cards when toggle is on */}
        <AnimatePresence>
          {state.showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 -mx-8 -mb-8 p-8 bg-gray-50 rounded-b-2xl"
            >
              <h3 className="text-3xl mb-4 text-center">
                Why Our Pricing Model Works
              </h3>
              <p className="text-gray-500 text-lg text-center mb-8 max-w-3xl mx-auto">
                Our subscription-based approach eliminates the traditional pain points of project-based pricing, giving you predictable costs and unlimited flexibility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiOutlineCurrencyDollar className="w-6 h-6 text-gray-900" />
                    <h4 className="text-lg font-bold">No Hourly Bills</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Forget about tracking hours or dealing with surprise invoices. You
                    pay a predictable flat monthly rate based on how many tasks we can
                    work on simultaneously – whether that&apos;s 1 task at a time, 2 tasks
                    at a time, or more.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiOutlineDocument className="w-6 h-6 text-gray-900" />
                    <h4 className="text-lg font-bold">Unlimited Requests</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    There&apos;s no limit to the number of ideas, improvements, or bug fixes
                    you can propose. Simply add them to your backlog and we&apos;ll plan and
                    execute them systematically in our ongoing monthly cycles.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HiOutlineArrowPath className="w-6 h-6 text-gray-900" />
                    <h4 className="text-lg font-bold">Adjust as Needed</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our subscription model is month-to-month with complete flexibility.
                    Need to speed up development? Increase parallel tasks. Need to slow
                    down? Scale back anytime – no long-term contracts required.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PricingTableView;