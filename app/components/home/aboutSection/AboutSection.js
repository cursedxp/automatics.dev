"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

export default function AboutSection() {
  const team = [
    {
      name: "Mircea Preotu",
      role: "Co-Founder. Solution Architect",
      image: "/assets/team/mircea.jpeg",
      // bio: "I’m responsible for turning messy reality into a working system: aligning stakeholders, making the tradeoffs, and keeping delivery grounded in what moves the business.",
      bio: "I help companies streamline their business. Most of my time goes into understanding processes, designing improvements, and making sure they get built right.",
      linkedin: "https://www.linkedin.com/in/mirceapreotu/",
      email: "mircea@automatics.dev",
      github: "https://github.com/yourprofile",
    },
    {
      name: "Anil Ozsoy",
      role: "Co-Founder. UX & Frontend Lead",
      image: "/assets/team/anil.png",
      bio: "I turn complex workflows into interfaces people actually use. I care about clarity, speed, and adoption so the system feels obvious, not like another tool your team avoids.",
      linkedin: "https://linkedin.com/in/partnerprofile",
      email: "anil@automatics.dev",
      github: "https://github.com/partnerprofile",
    },
  ];

  return (
    <section id="about" className="flex flex-col items-center justify-center my-20 px-4 sm:px-10">
      <div className="w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl mb-6 text-center">Team</h2>
        <p className="text-center text-gray-500 text-lg sm:text-xl mb-16 max-w-3xl mx-auto">
          Senior, hands-on, and accountable — no juniors, no disappearing acts.
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
                  You work directly with the people doing the work. 
                </p>
                
                <p>
                  We keep communication lean, decisions written down, and progress visible so you spend less time in meetings and more time seeing things move.
                </p>
                
                <p>
                  We’re practical. We build what fits your business, avoid “rip-and-replace” projects, and don’t ship clever complexity you’ll regret. If something isn’t worth building, we’ll tell you.
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
