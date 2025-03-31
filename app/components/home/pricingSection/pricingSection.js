"use client";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import Link from "next/link";
import pricingData from "@/app/data/pricing.json";

export default function PricingSection() {
  const { tiers } = pricingData.pricing;

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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
          margin: "0px",
        }}
        transition={{
          staggerChildren: 0.2,
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
              margin: "0px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className={`relative bg-white rounded-2xl p-8 transition-colors duration-300 hover:bg-black hover:text-white group cursor-pointer flex flex-col min-h-[600px] ${
              tier.popular ? "border-2 border-black" : ""
            }`}
          >
            <div className="text-left mb-8">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                {tier.popular && (
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    Most Popular
                  </div>
                )}
              </div>
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
                className="block w-full text-center py-3 rounded-full font-semibold bg-black text-white group-hover:bg-white group-hover:text-black transition-all"
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
