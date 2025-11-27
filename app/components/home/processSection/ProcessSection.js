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
              Plan, Build, Ship in Monthly Iterations
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p className="text-gray-500 text-sm leading-relaxed">
              We follow a simple yet effective process to deliver continuous
              value to your business, iterating monthly so you see steady
              progress without long wait times.
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
                We kick off each cycle with a focused planning session. In a
                quick discovery meeting, we identify your biggest pain points
                and opportunities. Together, we set clear Objectives and Key
                Results (OKRs) with measurable KPIs, so we know exactly what
                success looks like for the next iteration.
              </p>
            </div>

            {/* Step 2 - Build */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineWrenchScrewdriver className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Build</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team gets to work implementing the solution. Whether
                we&apos;re configuring an automation bot, designing a new
                interface, or developing a custom feature, we execute the tasks
                using the best tools available. Throughout this stage, we handle
                all the details – you won&apos;t be stuck in status meetings or
                micromanaging tasks.
              </p>
            </div>

            {/* Step 3 - Ship */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineRocketLaunch className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Ship</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                At the end of the month, we deliver the completed improvements
                and integrate them into your business. We review the results
                against the OKRs we set, confirm the KPIs are met, and gather
                your feedback. Then it&apos;s straight into the next cycle,
                using what we learned to plan the following month&apos;s tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
