"use client";
import { motion } from "framer-motion";
import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineDocumentCheck,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlinePresentationChartLine,
  HiOutlineAcademicCap,
  HiOutlineCog,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";

function CombinedServiceCard({ services, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Services Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-4 ${idx === 0 ? "lg:border-r border-gray-200" : ""}`}
          >
            {/* Service Header */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {service.icon}
                <h4 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
            </div>

            {/* Main Description */}
            <div className="mb-4 space-y-3">
              {service.compactDescription
                .split("\n\n")
                .map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Key Features - Compact Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {service.keyFeatures.map((feature, featureIdx) => (
                <div key={featureIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-1.5"></span>
                  <p className="text-xs text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const servicesData = [
  {
    title: "Fractional CTO",
    subtitle: "Senior technical leadership on-demand",
    compactDescription:
      "If you don’t need a full-time CTO, but you do need someone to own architecture decisions and keep delivery sane, this is it. I translate business priorities into a technical plan, set guardrails, and make sure your systems stay reliable as you ship.\n\nThis is ideal when you’re scaling, integrating multiple tools, working with vendors, or you need a senior person to de-risk decisions without turning every topic into a weeks-long workshop.",
    icon: <HiOutlineChartBar className="w-5 h-5 text-gray-900" />,
    traditionalCost: "$200K+/year",
    keyFeatures: [

      "Architecture & integration strategy",
      "Roadmap & prioritization",
      "Delivery governance",
      "Vendor selection & oversight",
      "Security, reliability & risk management",
      "Hiring support",
    ],
  },
  {
    title: "Fractional UX Lead",
    subtitle: "Senior design leadership on-demand",
    compactDescription:
      "Tools only work if people actually use them. I design workflows and interfaces that reduce friction internally, and customer-facing flows that remove drop-offs — then I make sure the design survives implementation.\n\nThis is ideal if you’re building portals/onboarding, modernizing internal tools, or you need UX leadership that ties design decisions to measurable adoption and conversion.",
    icon: <HiOutlineEye className="w-5 h-5 text-gray-900" />,
    traditionalCost: "$150K+/year",
    keyFeatures: [

    "UX audit & roadmapping",
    "User journeys & flows",
    "Prototypes, UI patterns & design system",
    "Usability testing & iteration",
    "Clear UX for flows and edge cases",
    "Handoff support & implementation QA",

    ],
  },
];

export default function PremiumServices() {
  return (
    <section className="flex flex-col items-center justify-center w-full my-20">
      <div className="max-w-7xl mx-auto w-full px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl text-gray-900 mb-6">
            Premium Add-on Services
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            Senior technical and UX leadership when you need it — to make better decisions, unblock delivery, and keep execution aligned with business outcomes.
          </p>
        </motion.div>

        {/* Service Card */}
        <div className="w-full">
          <CombinedServiceCard services={servicesData} index={0} />
        </div>

        {/* Book A Call Button */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Ready to add executive-level leadership to your team?
          </p>
          <a
            href="https://calendly.com/mircea-automatics/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 inline-block"
          >
            Book A Call
          </a>
        </div>
      </div>
    </section>
  );
}
