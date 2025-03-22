"use client";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="">
      <div className="relative flex flex-col items-center justify-center px-10 py-40">
        <h1 className="text-8xl text-center mb-10">
          <motion.span
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block"
          >
            Connecting Ideas
          </motion.span>
          <motion.span
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair-display block mt-12"
          >
            Real-World Solutions
          </motion.span>
        </h1>
        <p className="text-center text-gray-500 px-30 text-xl">
          At ThoughtLink, we transform your business challenges into custom
          digital solutions. From automation to tailored interfaces, we connect
          your ideas with the right technology—efficiently and thoughtfully.
        </p>
        <div className="absolute top-[260px] right-[600px] w-20 h-20 transform">
          <motion.div
            className="w-10 h-10 text-black flex justify-center items-center"
            initial={{
              y: -20,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
            }}
          >
            <div className="relative flex items-center">
              <div className="w-[80px] h-0.5 bg-black"></div>
              <p className="mx-5">TO</p>
              <div className="w-[80px] h-0.5 bg-black"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
