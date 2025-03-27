"use client";
import { motion } from "framer-motion";
import { HiPhone } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center 2xl:py-40 xl:py-40 lg:pt-40 md:pt-40 sm:pt-20 py-20">
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
        className="text-center text-gray-500 px-30 text-xl mb-10"
      >
        At ThoughtLink, we transform your business challenges into custom
        digital solutions. From automation to tailored interfaces, we connect
        your ideas with the right technology—efficiently and thoughtfully.
      </motion.p>
      <div className="flex justify-center gap-4">
        <motion.button
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </motion.button>
        <div className="flex items-center">
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
        </div>
      </div>
      <div className="absolute lg:top-[260px] md:top-[260px] sm:top-[160px] top-[145px] right-1/2 w-20 h-20 transform">
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
