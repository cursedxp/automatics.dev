import { motion } from "framer-motion";

export default function SidebarToggle({ showSidebar, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
        showSidebar ? 'bg-yellow-300' : 'bg-gray-200'
      }`}
    >
      <motion.div
        className="inline-block h-4 w-4 rounded-full bg-white shadow transform transition"
        initial={false}
        animate={{
          x: showSidebar ? 24 : 4
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
      />
      <span className="sr-only">
        {showSidebar ? "Hide sidebar" : "Show sidebar"}
      </span>
    </button>
  );
}