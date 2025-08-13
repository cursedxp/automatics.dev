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
          <p className="text-gray-600 text-lg">
            Legal information according to German law (§5 TMG)
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-8">
            {/* Company Information */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Company Information
              </h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>Company:</strong> Automatics</p>
                <p><strong>Address:</strong> Dusseldorf, Germany</p>
                <p><strong>Email:</strong> hi@automatics.io</p>
                <p><strong>Website:</strong> www.automatics.dev</p>
              </div>
            </section>

            {/* Responsible Person */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Responsible for Content
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>According to § 55 Abs. 2 RStV:</p>
                <p><strong>Name:</strong> Anil Ozsoy</p>
                <p><strong>Address:</strong> Dusseldorf, Germany</p>
                <p><strong>Email:</strong> hi@automatics.io</p>
              </div>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Disclaimer
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-black mb-2">Liability for Contents</h3>
                  <p>
                    As service providers, we are liable for own contents of these websites according to Sec. 7, para.1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-black mb-2">Liability for Links</h3>
                  <p>
                    Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for the contents of the linked websites.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-black mb-2">Copyright</h3>
                  <p>
                    Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
                  </p>
                </div>
              </div>
            </section>

            {/* EU Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                EU Dispute Resolution
              </h2>
              <div className="text-gray-700">
                <p>
                  The European Commission provides a platform for online dispute resolution (ODR): 
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    className="text-blue-600 hover:text-blue-800 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-2">
                  Our email address can be found above in the impressum.
                </p>
              </div>
            </section>

            {/* Consumer Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Consumer Dispute Resolution/Universal Arbitration Board
              </h2>
              <div className="text-gray-700">
                <p>
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
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
          <p>Last updated: August 2025</p>
        </motion.div>
      </div>
    </main>
  );
}