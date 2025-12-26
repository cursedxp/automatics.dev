"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineWrenchScrewdriver,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

export default function ProcessSection() {
  return (
    <motion.section
      className="flex flex-col w-full gap-8 xl:px-10 lg:px-10 md:px-10 sm:px-10 py-20 bg-white rounded-2xl shadow-2xl xs:px-8 my-20 px-4"
      animate={{ y: [-3, 3, -3] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex w-full gap-8 xs:flex-col lg:flex-row">
        {/* Left Side - Image Only */}
        <div className="flex flex-col lg:w-1/2 w-full">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/assets/images/built.jpg"
              alt="Our Process"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right Side - Title, Description, and Process Steps */}
        <div className="flex flex-col lg:w-1/2 w-full gap-8">
          {/* Title */}
          <div className="w-full">
            <h2 className="md:text-5xl lg:text-6xl sm:text-4xl text-5xl lg:leading-18 sm:leading-12 xs:text-4xl xs:leading-10">
              How we work
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p className="text-gray-500 text-sm leading-relaxed">
              We keep it simple: pick the highest-impact problem, ship an improvement fast, then measure what changed. You get momentum without constant meetings.
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-8">
            {/* Step 1 - Plan */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineClipboardDocumentList className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Plan</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We start by mapping how work actually flows today (lead → deal → delivery → invoice), where it breaks, and what it costs you. We agree on a clear outcome and 1–3 numbers to improve, then turn that into a short, prioritized backlog.
              </p>
            </div>

            {/* Step 2 - Build */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineWrenchScrewdriver className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Build</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We implement the solution: workflows, automations, integrations, and the internal or customer-facing apps needed to make the process run end-to-end. You get a live view of progress, decisions, and what’s next — with minimal overhead on your side.
              </p>
            </div>

            {/* Step 3 - Ship */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineRocketLaunch className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Ship</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We roll out the changes and help your team adopt them. Every cycle includes a shipped improvement and a short changelog. Once per month we review results, adjust priorities, and pick the next highest-impact move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
