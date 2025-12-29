"use client";
import { motion } from "framer-motion";
import { HiPhone } from "react-icons/hi2";
import { HiArrowDown } from "react-icons/hi2";
import Particles from "@/app/components/common/Particles";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-screen overflow-hidden">
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
      <h1 className="text-center mb-10 md:text-8xl sm:text-7xl text-6xl font-bold">
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center "
        >
          We improve your
        </motion.span>
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block mt-2"
        >
          business operations
        </motion.span>
      </h1>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center text-gray-500 sm:px-30 px-10 text-xl mb-10 max-w-6xl"
      >
      We automate your workflows and build internal and customer-facing apps that keep your data consistent.
      </motion.h2>
      <div className="flex flex-col items-center justify-center gap-2">
        <motion.a
          href="https://calendly.com/mircea-automatics/30min"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:bg-gray-800 transition-colors duration-300"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </motion.a>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-500 text-sm"
        >
          30 minute consultation call
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 text-black"
          >
            <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 bg-black rounded-full"
              />
            </div>
            <HiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

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
      {/* <div className="absolute xs:top-[120px] lg:top-[260px] md:top-[260px] sm:top-[160px] top-[65px] right-1/2 -translate-x-1/2 w-20 h-20 transform">
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
      </div> */}
    </section>
  );
}
