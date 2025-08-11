"use client";
import { motion } from "framer-motion";
import { PLANS_DATA } from "../constants";
import { animations } from "../config/animations";
import ResultScreenContent from "./ResultScreenContent";

const ResultView = ({ recommendation, onRestart }) => (
  <motion.div
    key="pricing-result"
    {...animations.content}
    role="region"
    aria-label="Recommended plan"
  >
    <ResultScreenContent
      recommendation={recommendation}
      plans={PLANS_DATA}
      onRestart={onRestart}
    />
  </motion.div>
);

export default ResultView;