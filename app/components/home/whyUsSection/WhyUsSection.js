"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineCog6Tooth,
  HiOutlineStar,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function WhyUsSection() {
  return (
    <motion.section
      className="flex flex-col w-full gap-8 xl:px-10 lg:px-10 md:px-10 sm:px-10 py-20 bg-white rounded-2xl shadow-2xl xs:px-8"
      animate={{ y: [-3, 3, -3] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex w-full gap-8 xs:flex-col lg:flex-row">
        {/* Left Side - Content */}
        <div className="flex flex-col lg:w-1/2 w-full gap-8">
          {/* Title */}
          <div className="w-full">
            <h2 className="md:text-5xl lg:text-6xl sm:text-4xl text-5xl lg:leading-18 sm:leading-12 xs:text-4xl xs:leading-10">
              The Thinking Partner Behind Every Great Solution
            </h2>
          </div>

          {/* Description */}
          <div className="w-full">
            <p className="text-gray-500 text-sm leading-relaxed">
              At automatics, we&apos;re more than just software engineers
              we&apos;re your dedicated technology partners. Founded by a
              solution architect and a product designer, we only take on
              projects in industries where we have first-hand experience. This
              means we speak your language and understand your challenges from
              day one.
            </p>
          </div>

          {/* Feature Cards - Now on the left side */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-y-6 gap-x-4">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineCog6Tooth className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">
                  No Management Overhead
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                You won&apos;t need to manage yet another team. We handle
                everything from project planning to deployment, so you can focus
                on your core business operations without the hassle of
                micromanaging development tasks.
              </p>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineStar className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">Senior Expertise</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Senior Expertise, Every Time: No junior staff, no sales
                gimmicks. Our co-founders personally oversee each project,
                ensuring you get the highest level of technical expertise and
                strategic thinking on every engagement.
              </p>
            </div>
            {/* Column 3 */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <HiOutlineChartBar className="w-6 h-6 text-gray-900 mr-4" />
                <h3 className="text-xl text-gray-800">
                  Results-Driven Approach
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don&apos;t sell &quot;seats&quot; or bill hours – we deliver
                outcomes. Every project is measured by the value it creates for
                your business, not the time we spend building it.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex flex-col lg:w-1/2 w-full">
          <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/assets/images/team.jpg"
              alt="Why Us"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
