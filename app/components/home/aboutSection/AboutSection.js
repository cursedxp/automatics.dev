"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Mircea Preotu",
      // role: "Co-Founder. Solution Architect",
      role: "Co-Founder · Systems & Delivery Lead",
      image: "/assets/team/mircea.jpeg",
      // bio: "I'm responsible for turning messy reality into a working system: aligning stakeholders, making the tradeoffs, and keeping delivery grounded in what moves the business.",
      // bio: "I help companies streamline their business. Most of my time goes into understanding processes, designing improvements, and making sure they get built right.",
      bio: "I lead delivery end-to-end — from first diagnosis to shipped changes in production.\n\nMy job is to turn messy reality into clear decisions, a prioritized plan, and a system that stays reliable as you grow.\n\nI'm hands-on, opinionated about simplicity, and I'll push back when a \"nice idea\" adds complexity without payoff.",
      linkedin: "https://www.linkedin.com/in/mirceapreotu/",
      email: "mircea@automatics.dev",
      github: "https://github.com/yourprofile",
    },
    {
      name: "Anil Ozsoy",
      // role: "Co-Founder. UX & Frontend Lead",
      role: "Co-Founder · UX & Frontend Lead",
      image: "/assets/team/anil.png",
      // bio: "I turn complex workflows into interfaces people actually use. I care about clarity, speed, and adoption so the system feels obvious, not like another tool your team avoids.",
      bio: "I design and build interfaces for internal tools and customer portals that people actually use.\n\nI'm focused on clarity, speed, and adoption — reducing friction in daily work and making complex flows feel obvious.\n\nI stay close to implementation so the shipped product matches the design, not a diluted version of it.",
      linkedin: "https://linkedin.com/in/partnerprofile",
      email: "anil@automatics.dev",
      github: "https://github.com/partnerprofile",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col items-center justify-center my-20 px-4 sm:px-10"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl mb-6 text-center">Who we are</h2>
        <p className="text-center text-gray-500 text-lg sm:text-xl mb-16 max-w-3xl mx-auto">
          Senior, hands-on, and accountable — direct access, no layers, no
          handoffs.
        </p>

        {/* Layout with Left Card and Right Text */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start"> */}
        <div className="grid grid-cols-1 gap-8 items-start">
          {/* Left Side - Team Profiles Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 lg:p-12 "
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col gap-4">
                  {/* Profile Image */}
                  <div className="relative w-20 h-20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  {/* Profile Info */}
                  <div className="flex flex-col space-y-3">
                    <div>
                      <h4 className="text-lg font-bold">{member.name}</h4>
                      <p className="text-gray-600 text-xs">{member.role}</p>
                    </div>

                    {/* <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p> */}

                    {member.bio.split("\n\n").map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {/* Contact Links */}
                    <div className="flex gap-4">
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-600 transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`mailto:${member.email}`}
                        className="text-black hover:text-gray-600 transition-colors duration-300"
                        aria-label="Email"
                      >
                        <HiOutlineEnvelope className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
