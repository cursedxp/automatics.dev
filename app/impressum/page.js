"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
          >
            <HiArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Impressum
          </h1>
         
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Angaben gemäß Digitale-Dienste-Gesetz (DDG)
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Mircea Preotu</p>
                <p>Prinz-Georg-Straße 79</p>
                <p>40479 Düsseldorf</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Kontakt
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> hi@automatics.dev</p>
              </div>
            </section>

            {/* <section>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Umsatzsteuer-ID
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DEXXXXX</p>
              </div>
            </section> */}

            <section>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>Last updated: December 2025</p>
        </motion.div>
      </div>
    </main>
  );
}