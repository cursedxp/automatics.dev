"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 text-lg">
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                1. Introduction
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to Automatics (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;). These Terms of Service
                  (&ldquo;Terms&rdquo;) govern your use of our website located
                  at www.automatics.dev (the &ldquo;Service&rdquo;) operated by
                  Automatics.
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by
                  these Terms. If you disagree with any part of these terms,
                  then you may not access the Service.
                </p>
              </div>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                2. Description of Services
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Automatics provides digital solutions and software development
                  services including but not limited to:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Custom software development</li>
                  <li>Web application development</li>
                  <li>UI/UX design services</li>
                  <li>Technical consulting</li>
                  <li>Project management</li>
                  <li>Maintenance and support services</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                3. User Responsibilities
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>You agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Provide accurate and complete information when using our
                    services
                  </li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                4. Payment Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Payment terms will be specified in individual project
                  agreements. Generally:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Payment schedules are defined per project</li>
                  <li>
                    Invoices are due within 30 days unless otherwise specified
                  </li>
                  <li>Late payments may incur additional fees</li>
                  <li>
                    All prices are exclusive of taxes unless stated otherwise
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>Unless otherwise agreed in writing:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Clients retain ownership of their data and content</li>
                  <li>
                    Custom-developed solutions become client property upon full
                    payment
                  </li>
                  <li>
                    We retain rights to general methodologies and know-how
                  </li>
                  <li>
                    Third-party components remain subject to their respective
                    licenses
                  </li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  To the fullest extent permitted by law, Automatics shall not
                  be liable for:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages exceeding the amount paid for services</li>
                  <li>
                    Issues arising from third-party services or components
                  </li>
                </ul>
              </div>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                7. Privacy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the Service, to
                  understand our practices.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                8. Termination
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may terminate or suspend your access immediately, without
                  prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the Terms.
                </p>
              </div>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                9. Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material, we
                  will try to provide at least 30 days notice prior to any new
                  terms taking effect.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                10. Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <p>
                  <strong>Email:</strong> hi@automatics.io
                  <br />
                  <strong>Address:</strong> Dusseldorf, Germany
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
