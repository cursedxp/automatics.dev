"use client";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import Link from "next/link";

export default function PricingSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const pricingTiers = [
    {
      name: "Testing",
      price: "$2,999",
      description:
        "Perfect for validating your idea and getting initial feedback",
      sectionDescription:
        "Quick validation of your concept with essential features and feedback",
      features: [
        "Basic UI/UX Design",
        "Core Functionality Testing",
        "Performance Analysis",
        "Security Assessment",
        "User Feedback Collection",
        "Basic Documentation",
      ],
      cta: "Start Testing",
      popular: false,
    },
    {
      name: "Sprint",
      price: "$4,999",
      description: "Ideal for rapid development and quick market entry",
      sectionDescription:
        "Fast-track your project with comprehensive development and support",
      features: [
        "Advanced UI/UX Design",
        "Full Feature Development",
        "Performance Optimization",
        "Security Implementation",
        "User Testing & Feedback",
        "Comprehensive Documentation",
        "Deployment Support",
        "2 Weeks of Maintenance",
      ],
      cta: "Start Sprint",
      popular: true,
    },
    {
      name: "Custom",
      price: "Custom",
      description: "Tailored solution for complex business needs",
      sectionDescription:
        "Enterprise-grade solutions with dedicated support and customization",
      features: [
        "Custom UI/UX Design",
        "Full-Scale Development",
        "Advanced Security Features",
        "Scalability Planning",
        "Enterprise Integration",
        "24/7 Support",
        "Custom Maintenance Plan",
        "Dedicated Project Manager",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center my-20 px-10 sm:px-0">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl mb-4">Choose Your Path</h2>
        <p className="text-gray-500 text-xl sm:px-10">
          Select the perfect plan that aligns with your project needs and
          timeline
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
          margin: "0px",
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            variants={item}
            className={`relative bg-white rounded-2xl p-8 transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[600px] ${
              tier.popular ? "border-2 border-black" : ""
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Most Popular
              </div>
            )}
            <div className="text-left mb-8">
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-500 mb-4 group-hover:text-gray-400">
                {tier.sectionDescription}
              </p>
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <p className="text-gray-600 group-hover:text-gray-300">
                {tier.description}
              </p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-green-500 group-hover:text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full text-center py-3 rounded-full font-semibold bg-black text-white hover:bg-white hover:text-black transition-all"
              >
                {tier.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
