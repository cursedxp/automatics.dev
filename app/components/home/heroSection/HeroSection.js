"use client";
import { motion } from "framer-motion";
import { HiPhone } from "react-icons/hi2";
import Particles from "@/app/components/common/Particles";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center 2xl:py-40 xl:py-40 lg:pt-40 md:pt-40 sm:pt-20 mb-20 overflow-hidden w-screen">
      <div className="absolute inset-0 -z-10 overflow-hidden blur-xs">
        <Particles
          id="hero-particles"
          className="z-0"
          color="#000000"
          particleCount={70}
          speed={1}
          size={{ min: 1, max: 3 }}
        />
      </div>
      <h1 className="text-center mb-10 md:text-8xl sm:text-7xl text-6xl">
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          Connecting Ideas
        </motion.span>
        <motion.span
          initial={{ filter: "blur(10px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-playfair-display block mt-12 md:text-8xl text-6xl"
        >
          Real-World Solutions
        </motion.span>
      </h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-gray-500 sm:px-30 px-10 text-xl mb-10 max-w-6xl"
      >
        At Automatics, we transform your business challenges into custom digital
        solutions. From automation to tailored interfaces, we connect your ideas
        with the right technology—efficiently and thoughtfully.
      </motion.p>
      <div className="flex justify-center gap-4">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:bg-blue-700 transition-colors duration-300"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </motion.button>
        {/* <div className="flex items-center">
          <ul className="flex">
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/assets/userPhotos/user-1.png"
                alt="John Doe"
                fill
                className="rounded-full border-3 border-white"
              />
            </motion.li>
            <motion.li
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="relative w-10 h-10 -translate-x-2"
            >
              <Image
                src="/assets/userPhotos/user-2.png"
                alt="Jane Doe"
                fill
                className="rounded-full border-3 border-white"
              />
            </motion.li>
            <motion.li
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="relative w-10 h-10 -translate-x-4"
            >
              <Image
                src="/assets/userPhotos/user-3.png"
                alt="John Doe"
                fill
                className="rounded-full border-3 border-white"
              />
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="font-semibold text-xs w-20 underline"
          >
            <Link href="/testimonials">Our Testimonials</Link>
          </motion.div>
        </div> */}
      </div>
      <div className="absolute xs:top-[120px] lg:top-[260px] md:top-[260px] sm:top-[160px] top-[65px] right-1/2 -translate-x-1/2 w-20 h-20 transform">
        <motion.div
          className="h-10 w-fit text-black flex justify-center items-center"
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
    </section>
  );
}
