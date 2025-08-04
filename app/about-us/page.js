"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import teamData from "../data/team.json";
import { HiPhone } from "react-icons/hi";
export default function AboutUs() {
  const ref = useRef(null);
  const { teamMembers } = teamData;

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20 px-4">
      {/* Hero Section */}
      <motion.header className="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-center mb-6 sm:mb-8 md:mb-10 text-4xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            Automatics
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto px-4"
        >
          We&apos;re not just another tech company. We&apos;re your partner in
          building the future of digital solutions.
        </motion.p>
      </motion.header>

      {/* The Future is Built, Not Bought */}
      <motion.article
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full mb-12 sm:mb-16 md:mb-20"
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              The Future is Built, Not Bought
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">
              The one-size-fits-all approach in software doesn&apos;t fit
              anymore. Modern companies want tools tailored to their workflows,
              not bloated platforms they need to adapt to.
            </p>
            <p className="text-gray-500 text-base sm:text-lg">
              At Automatics, we help businesses build smart, focused digital
              systems instead of forcing them into someone else&apos;s mold. We
              use low-code tools, modular architecture, and fast iteration to
              build exactly what you need, when you need it.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative h-[300px] sm:h-[400px] w-full lg:w-1/2"
          >
            <Image
              src="/assets/images/built.jpg"
              alt="Building the future - Automatics's approach to custom digital solutions"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.figure>
        </div>
      </motion.article>

      {/* Purpose-Driven Digital Systems */}
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full mb-12 sm:mb-16 md:mb-20 py-12 sm:py-16 md:py-20 rounded-2xl"
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative h-[300px] sm:h-[400px] w-full lg:w-1/2"
          >
            <Image
              src="/assets/images/digital.jpg"
              alt="Purpose-driven digital systems - Automatics's custom solutions"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Purpose-Driven Digital Systems
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">
              Every company is different in how it operates, how it
              communicates, and how it grows. So why should everyone use the
              same tools?
            </p>
            <p className="text-gray-500 text-base sm:text-lg">
              At Automatics, we believe internal systems deserve the same level
              of care and design as customer-facing products. We build internal
              tools that are tailored to your unique workflows, company culture,
              and operational logic.
            </p>
          </motion.div>
        </div>
      </motion.article>

      {/* More Than a Vendor */}
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full mb-12 sm:mb-16 md:mb-20"
      >
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              More Than a Vendor: Your Product Partner
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-4 sm:mb-6">
              We don&apos;t just deliver projects; we become an integral part of
              your team. As your product partner, we invest in understanding
              your business, challenges, and goals.
            </p>
            <p className="text-gray-500 text-base sm:text-lg">
              Our collaborative approach ensures that we&apos;re not just
              building what you ask for, but what you truly need to succeed.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative h-[300px] sm:h-[400px] w-full lg:w-1/2"
          >
            <Image
              src="/assets/images/partnership.jpg"
              alt="Automatics's partnership approach - Building lasting relationships"
              fill
              className="object-cover rounded-2xl grayscale"
            />
          </motion.figure>
        </div>
      </motion.article>

      {/* Meet the Team */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
        className="w-full"
        aria-labelledby="team-heading"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="team-heading"
            className="text-3xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            Meet the Minds Behind Automatics
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Our team brings together diverse expertise and perspectives to
            create innovative solutions.
          </p>
        </div>
        <div
          className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl mx-auto"
          role="list"
        >
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center group hover:bg-black hover:text-white transition-all duration-300 flex-1 min-w-[280px] max-w-[400px]"
              role="listitem"
            >
              <figure className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Automatics`}
                  fill
                  className="object-cover rounded-full"
                />
              </figure>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                {member.name}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-400 text-left">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Book a Call CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full mt-12 sm:mt-16 md:mt-20"
      >
        <div className="text-black rounded-2xl p-6 sm:p-8 md:p-12 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Let&apos;s discuss how we can help transform your business with
            custom digital solutions. Book a call with our team today.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full text-base sm:text-lg w-fit font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
          >
            <HiPhone className="w-4 h-4" />
            Book a Call
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
