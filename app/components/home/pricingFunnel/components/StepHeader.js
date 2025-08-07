import { HiArrowLeft } from "react-icons/hi2";
import SidebarToggle from "./SidebarToggle";

export default function StepHeader({ onBack, onToggleSidebar, showSidebar }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
      >
        <HiArrowLeft className="w-4 h-4" />
        Back
      </button>
      
      {onToggleSidebar && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            {showSidebar ? "Hide" : "Show"} Info
          </span>
          <SidebarToggle showSidebar={showSidebar} onToggle={onToggleSidebar} />
        </div>
      )}
    </div>
  );
}