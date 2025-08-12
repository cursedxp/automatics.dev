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

            {/* Cost Comparison */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500">
                    Traditional: {service.traditionalCost}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-gray-900">
                    Fraction of the cost
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const servicesData = [
  {
    title: "CTO-as-a-Service",
    subtitle: "Senior technical leadership on-demand",
    compactDescription:
      "For businesses looking for senior technical leadership without hiring a full-time CTO, automatics offers CTO as a Service. In this arrangement, we act as your on-demand Chief Technology Officer – taking full responsibility for your digital assets and tech strategy. We'll oversee everything from big-picture architecture and technology roadmapping to the nitty-gritty of vendor management and system maintenance.\n\nThis is a concierge-level service ideal for companies that want an expert guiding their technology decisions and ensuring all digital initiatives align with business goals. You get the benefit of decades of experience in strategy and implementation, at a fraction of the cost of a full-time executive.",
    icon: <HiOutlineChartBar className="w-5 h-5 text-gray-900" />,
    traditionalCost: "$200K+/year",
    keyFeatures: [
      "Technology roadmapping",
      "Vendor management",
      "System architecture",
      "Risk mitigation",
      "Team leadership",
      "Strategic planning",
    ],
    features: [
      {
        icon: (
          <HiOutlinePresentationChartLine className="w-5 h-5 text-gray-700" />
        ),
        title: "Strategic Technology Roadmapping",
        description:
          "Long-term vision and planning for your technology infrastructure",
      },
      {
        icon: <HiOutlineCog className="w-5 h-5 text-gray-700" />,
        title: "Vendor & System Management",
        description:
          "Oversee all technology partnerships and infrastructure maintenance",
      },
      {
        icon: <HiOutlineArrowTrendingUp className="w-5 h-5 text-gray-700" />,
        title: "Business-Aligned Technology Decisions",
        description:
          "Ensure all digital initiatives support your core business objectives",
      },
      {
        icon: <HiOutlineLightBulb className="w-5 h-5 text-gray-700" />,
        title: "Executive-Level Expertise",
        description:
          "Decades of strategic experience at a fraction of the cost",
      },
    ],
    included: [
      "Technology strategy & roadmapping",
      "Vendor evaluation & management",
      "System architecture oversight",
      "Risk assessment & mitigation",
      "Team leadership guidance",
    ],
  },
  {
    title: "UX Strategy Service",
    subtitle: "Senior design leadership on-demand",
    compactDescription:
      "For organizations seeking expert UX leadership but not ready to commit to a full-time Head of UX or Director of Design, we offer UX Strategy Consulting-as-a-Service. In this arrangement, we act as your on-demand UX executive—taking ownership of your user experience vision, research planning, strategic design roadmaps, and ensuring every digital touchpoint delivers measurable impact.\n\nThis is a concierge-level service ideal for companies that want an expert guiding their design decisions and ensuring all UX initiatives align with business goals. You get the benefit of decades of experience in strategy and implementation, at a fraction of the cost of a full-time executive.",
    icon: <HiOutlineEye className="w-5 h-5 text-gray-900" />,
    traditionalCost: "$150K+/year",
    keyFeatures: [
      "UX vision & roadmapping",
      "Research planning",
      "Design audits",
      "Team coaching",
      "Tool ecosystem",
      "Change management",
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
            Executive-level expertise on demand. Get senior technical and design
            leadership without the overhead of full-time executive hires.
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
            href="https://calendly.com/d/csxj-m6y-ssx/meet-with-the-automatics-team"
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
