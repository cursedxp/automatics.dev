"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            How we collect, use, and protect your personal information.
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
                  At Automatics (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;), we respect your privacy and are committed
                  to protecting your personal data. This Privacy Policy explains
                  how we collect, use, disclose, and safeguard your information
                  when you visit our website www.automatics.dev and use our
                  services.
                </p>
                <p>
                  This policy applies to all information collected through our
                  website, services, and any related services, sales, marketing,
                  or events.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-black mb-2">
                    Personal Information
                  </h3>
                  <p>
                    We may collect personal information that you voluntarily
                    provide, including:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-2">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business information (company name, job title)</li>
                    <li>Project requirements and specifications</li>
                    <li>Communication preferences</li>
                    <li>
                      Information provided during consultations or meetings
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">
                    Automatically Collected Information
                  </h3>
                  <p>
                    We may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mt-2">
                    <li>IP address and browser information</li>
                    <li>Device and operating system information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                3. How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We use collected information for:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about projects and services</li>
                  <li>Processing payments and managing contracts</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing website usage and improving user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting against fraud and security threats</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties, except in the following
                  circumstances:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>
                    To trusted service providers who assist us in operating our
                    business
                  </li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>
                    To protect the safety and security of our users or the
                    public
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                5. Data Security
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and employee training</li>
                  <li>Secure hosting and backup procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                6. Your Privacy Rights
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Right to access and receive a copy of your personal data
                  </li>
                  <li>Right to rectify inaccurate or incomplete data</li>
                  <li>
                    Right to erase your personal data under certain
                    circumstances
                  </li>
                  <li>Right to restrict or object to processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control cookies
                  through your browser settings, but disabling cookies may
                  affect website functionality.
                </p>
                <p>We use cookies for:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Personalization and user preferences</li>
                  <li>Marketing and advertising (with consent)</li>
                </ul>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                8. Third-Party Services
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites or
                  integrate with third-party services such as:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Calendly for appointment scheduling</li>
                  <li>Analytics providers</li>
                  <li>Payment processors</li>
                  <li>Social media platforms</li>
                </ul>
                <p>
                  We are not responsible for the privacy practices of these
                  third-party services. We encourage you to review their privacy
                  policies.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                9. Data Retention
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We retain your personal information only as long as necessary
                  to fulfill the purposes outlined in this privacy policy,
                  comply with legal obligations, resolve disputes, and enforce
                  our agreements.
                </p>
                <p>
                  When data is no longer needed, we securely delete or anonymize
                  it according to our data retention policies.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                10. International Data Transfers
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure that
                  such transfers comply with applicable data protection laws and
                  provide appropriate safeguards.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the &ldquo;Last Updated&rdquo; date.
                  We encourage you to review this policy periodically.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                12. Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> hi@automatics.io
                  <br />
                  <strong>Address:</strong> Dusseldorf, Germany
                </p>
                <p>
                  For data protection inquiries, you can also contact your local
                  data protection authority.
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
