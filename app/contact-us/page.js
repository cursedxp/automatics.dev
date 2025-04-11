"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { sendEmail } from "../lib/emailjs";

const initialFormState = {
  name: "",
  email: "",
  title: "",
  message: "",
};

export default function ContactUs() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const templateParams = {
        name: formState.name,
        email: formState.email,
        title: formState.title,
        message: formState.message,
      };

      const result = await sendEmail(templateParams);

      if (!result.success) {
        throw new Error("Failed to send email");
      }

      setIsSubmitted(true);
      setFormState(initialFormState);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col max-w-screen-xl mx-auto items-center h-full py-8 sm:py-12 md:py-20 px-4">
      {/* Hero Section */}
      <motion.header className="text-center mb-12 sm:mb-16 md:mb-20">
        <h1 className="text-center mb-6 sm:mb-8 md:mb-10 text-4xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ y: -50, filter: "blur(10px)", opacity: 0 }}
            animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            Contact Us
          </motion.span>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto px-4"
        >
          Get in touch with our team. We&apos;re here to help with your
          projects, answer questions, or discuss potential collaborations.
        </motion.p>
      </motion.header>

      {/* Contact Form and Info */}
      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mb-8">
                Have a project in mind or just want to explore possibilities?
                We&apos;d love to hear from you. Reach out to us through any of
                the following channels or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <HiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                  <a
                    href="mailto:hi@thoughtlink.io"
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    hi@thoughtlink.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <HiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Schedule a Call
                  </h3>
                  <Link
                    href="/book-a-call"
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-black text-white p-3 rounded-full">
                  <HiLocationMarker className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-500">
                    123 Innovation Street
                    <br />
                    Tech Hub, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="bg-white rounded-2xl p-8 ">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                    Thank you for your message! We&apos;ll get back to you
                    shortly.
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formState.title}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
