import { HiOutlineSparkles } from "react-icons/hi2";

export default function FindMyPlanCard({ onLearnMore }) {
  return (
    <div className="relative p-8 transition-all duration-300 flex flex-col min-h-[500px] justify-center bg-gray-50 rounded-2xl">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Not Sure Which Plan is Right?
        </h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Answer a few quick questions and we&apos;ll recommend the perfect
          plan based on your specific needs and timeline.
        </p>
        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-base hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:cursor-pointer"
        >
          Find My Plan
          <HiOutlineSparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}