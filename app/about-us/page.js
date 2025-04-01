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
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-20">
      {/* Hero Section */}
      <motion.header className="text-center mb-20 px-4">
        <h1 className="text-center mb-10 md:text-8xl sm:text-7xl text-6xl">
          <motion.span
            initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            ThoughtLink
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 text-xl max-w-2xl mx-auto"
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
        className="w-full mb-20 px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              The Future is Built, Not Bought
            </h2>
            <p className="text-gray-500 text-lg mb-6">
              The one-size-fits-all approach in software doesn&apos;t fit
              anymore. Modern companies want tools tailored to their workflows,
              not bloated platforms they need to adapt to.
            </p>
            <p className="text-gray-500 text-lg">
              At ThoughtLink, we help businesses build smart, focused digital
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
            className="relative h-[400px]"
          >
            <Image
              src="/assets/images/built.jpg"
              alt="Building the future - ThoughtLink's approach to custom digital solutions"
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
        className="w-full mb-20 px-4 py-20 rounded-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative h-[400px] order-2 lg:order-1"
          >
            <Image
              src="/assets/images/digital.jpg"
              alt="Purpose-driven digital systems - ThoughtLink's custom solutions"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.figure>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Purpose-Driven Digital Systems
            </h2>
            <p className="text-gray-500 text-lg mb-6">
              Every company is different in how it operates, how it
              communicates, and how it grows. So why should everyone use the
              same tools?
            </p>
            <p className="text-gray-500 text-lg">
              At ThoughtLink, we believe internal systems deserve the same level
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
        className="w-full mb-20 px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              More Than a Vendor: Your Product Partner
            </h2>
            <p className="text-gray-500 text-lg mb-6">
              We don&apos;t just deliver projects; we become an integral part of
              your team. As your product partner, we invest in understanding
              your business, challenges, and goals.
            </p>
            <p className="text-gray-500 text-lg">
              Our collaborative approach ensures that we&apos;re not just
              building what you ask for, but what you truly need to succeed.
            </p>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative h-[400px]"
          >
            <Image
              src="/assets/images/partnership.jpg"
              alt="ThoughtLink's partnership approach - Building lasting relationships"
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
        className="w-full px-4"
        aria-labelledby="team-heading"
      >
        <div className="text-center mb-12">
          <h2
            id="team-heading"
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Meet the Minds Behind ThoughtLink
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our team brings together diverse expertise and perspectives to
            create innovative solutions.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          role="list"
        >
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl p-8 text-center group hover:bg-black hover:text-white transition-all duration-300"
              role="listitem"
            >
              <figure className="relative w-40 h-40 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at ThoughtLink`}
                  fill
                  className="object-cover rounded-full"
                />
              </figure>
              <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 text-base mb-4">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-gray-400 text-left">
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
        className="w-full px-4 mt-20"
      >
        <div className="bg-black text-white rounded-2xl p-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Build Your Digital Future?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help transform your business with
            custom digital solutions. Book a call with our team today.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded-full text-lg w-fit font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
          >
            <HiPhone className="w-4 h-4" />
            Book a Call
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
