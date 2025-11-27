"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AboutSection() {
  const team = [
    {
      name: "Mircea Preotu",
      role: "Co-Founder & Solution Architect",
      image: "/assets/team/mircea.jpeg",
      bio: "I help companies figure out how their business actually works, then build systems that make sense for them. Most of my time goes into understanding the mess, designing something better, and making sure it gets built right.",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "mircea@automatics.com",
      github: "https://github.com/yourprofile",
    },
    {
      name: "Anil Ozsoy",
      role: "Co-Founder & UX Designer / Frontend Developer",
      image: "/assets/team/anil.png",
      bio: "I do both design and code. Spent years as a designer before switching to development, so I care a lot about how things actually feel to use. It's pretty useful being able to design something and then build it myself.",
      linkedin: "https://linkedin.com/in/partnerprofile",
      email: "anil@automatics.com",
      github: "https://github.com/partnerprofile",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center my-20 px-4 sm:px-10">
      <div className="w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl mb-6 text-center">Meet The Team</h2>
        <p className="text-center text-gray-500 text-lg sm:text-xl mb-16 max-w-3xl mx-auto">
          Just two people who got tired of seeing businesses struggle with bad software.
        </p>

        {/* Single Card with Left Story and Right Profiles */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Company Story */}
            <div className="flex flex-col  space-y-6">
              <h3 className="md:text-5xl lg:text-6xl sm:text-4xl text-5xl lg:leading-18 sm:leading-12 xs:text-4xl xs:leading-10">
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  We started this because everywhere we looked, companies were dealing with the same problems. Too much manual work, tools that don&apos;t talk to each other, systems that make simple things complicated.
                </p>
                <p>
                  Mircea spent years fixing broken business processes. Anil designed interfaces at companies where bad UX actually cost money. We got good at understanding what&apos;s really broken and how to fix it without making things worse.
                </p>
                <p>
                  Here&apos;s how we work: first, we figure out what you&apos;re actually doing today. Then we build something that fits into your workflow instead of forcing you to change everything. No fancy jargon, no overcomplicated solutions.
                </p>
              </div>
            </div>

            {/* Right Side - Team Profiles */}
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

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>

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
          </div>
        </div>
      </div>
    </section>
  );
}
