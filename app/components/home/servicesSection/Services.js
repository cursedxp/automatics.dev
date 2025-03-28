"use client";
import {
  HiCommandLine,
  HiSwatch,
  HiDocumentText,
  HiSquares2X2,
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
    <section className="flex flex-col items-center justify-center my-40 xl:px-10 lg:px-10">
      <h2 id="services-title" className="text-6xl mb-12 text-center">
        Tailored Solutions for Your Business
      </h2>
      <p className="text-center text-gray-500 px-30 text-xl mb-12">
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
          amount: 0.3,
          margin: "-100px",
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-10 sm:px-10"
        aria-labelledby="services-title"
      >
        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiCommandLine className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">Automation</h2>
            <p className="text-base">
              We develop custom automation solutions that streamline workflows
              and boost efficiency. Our systems eliminate repetitive tasks,
              enabling your team to focus on what truly matters.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiSwatch className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">UI/UX Design</h2>
            <p className="text-base">
              We create intuitive and responsive user interfaces that enhance
              user experience. Our designs transform complex workflows into
              simple, elegant solutions.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiDocumentText className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">CMS Solutions</h2>
            <p className="text-base">
              We build flexible content management systems tailored to your
              workflow. Our solutions empower your team to manage content
              efficiently and effectively.
            </p>
          </div>
        </motion.article>

        <motion.article
          variants={item}
          className="rounded-2xl p-8 bg-white relative transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[400px]"
        >
          <div className="flex items-center justify-center rounded-full bg-black transition-colors duration-300 w-14 h-14 group-hover:bg-white">
            <HiSquares2X2 className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-black" />
          </div>
          <div className="mt-auto">
            <h2 className="text-2xl font-bold mb-3">Business Apps</h2>
            <p className="text-base">
              We transform your vision into tailored software solutions that fit
              your needs. Our collaborative approach ensures systems that align
              perfectly with your goals.
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
