import { motion } from "framer-motion";
import { renderIcon } from "./IconRenderer";

export default function MultipleChoiceOptions({ question, currentAnswer, onAnswer }) {
  return (
    <div className={`grid gap-4 max-w-6xl mx-auto ${
      question.options.length === 3 
        ? "grid-cols-3 justify-items-center" 
        : "grid-cols-2"
    }`}>
      {question.options.map((option) => (
        <motion.button
          key={option.value}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(option.value)}
          className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
            currentAnswer === option.value
              ? "border-gray-900 bg-white shadow-lg"
              : "border-gray-200 bg-white hover:shadow-md hover:border-gray-300"
          }`}
        >
          <div className="text-left">
            <div className="mb-4">
              {renderIcon(option.icon, "w-8 h-8")}
            </div>
            <div className="text-xl text-gray-900 mb-3">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-500">{option.description}</div>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
}