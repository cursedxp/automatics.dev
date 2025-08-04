"use client";
import {
  HiOutlineCommandLine,
  HiOutlineSwatch,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center my-20 px-10 sm:px-0">
      <h2 id="services-title" className="text-6xl mb-12 text-center">
        Tailored Solutions for Your Business
      </h2>
      <p className="text-center text-gray-500 text-xl mb-12 sm:px-10">
        We craft custom digital solutions that adapt to your business needs.
        From seamless interfaces to smart automation, our services bring your
        ideas to life with clarity and impact.
      </p>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
          margin: "0px",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-10 sm:px-10"
        aria-labelledby="services-title"
      >
        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiOutlineCommandLine className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">
              Smart Process Automation
            </h2>
            <p className="text-base">
              Eliminating repetitive tasks and manual processes that slow you
              down. We&apos;ll integrate smart automation to boost your
              team&apos;s efficiency.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiOutlineSwatch className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">UI/UX Design</h2>
            <p className="text-base">
              Creating user-friendly, responsive interfaces. Our product design
              expertise ensures that the software works well and delights your
              team and customers.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiOutlineDocumentText className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">CMS Systems</h2>
            <p className="text-base">
              Implementing content management systems tailored to your workflow.
              Manage your data and content with ease and without technical
              headaches.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiOutlineSquares2X2 className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">Business Apps</h2>
            <p className="text-base">
              Turning your ideas into robust applications. From internal tools
              to customer-facing apps, we build software that fits your unique
              business processes and workflows.
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
