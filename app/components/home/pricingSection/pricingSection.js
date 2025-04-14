"use client";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import Link from "next/link";
import pricingData from "@/app/data/pricing.json";

export default function PricingSection({ hideHeader = false }) {
  const { tiers } = pricingData.pricing;

  return (
    <section
      id="pricing"
      className="flex flex-col items-center justify-center w-full"
    >
      {!hideHeader && (
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
      )}

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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
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
            className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col min-h-[600px]`}
          >
            <div className="text-left mb-8">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                {tier.popular && (
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">
                {tier.sectionDescription}
              </p>
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <p className="text-gray-600">{tier.description}</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>{feature}</span>
                </li>
              ))}
              {tier.name === "Sprint" && (
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>All in testing</span>
                </li>
              )}
            </ul>
            <div className="mt-auto">
              <Link
                href="/contact-us"
                className="block w-full text-center py-3 rounded-full font-semibold bg-black text-white hover:bg-gray-800 transition-all"
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
