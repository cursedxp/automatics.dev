"use client";
import Link from "next/link";
import { HiOutlineMenu, HiPhone } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "@/app/components/common/Logo";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-gray-100/80 backdrop-blur-sm border-b border-gray-100">
      <nav
        className="max-w-screen-xl mx-auto flex justify-between items-center p-3"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Logo className="w-35" />
          </Link>
        </div>
        {/* Desktop Navbar */}
        <ul className="gap-12 hidden lg:flex" role="list">
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/about-us" aria-label="about us">
              Automatics
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/blog" aria-label="Blog">
              Insights
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/pricing" aria-label="pricing">
              Pricing
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/faq" aria-label="faq">
              FAQ
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/contact-us" aria-label="contact us">
              Contact Us
            </Link>
          </li>
        </ul>
        <Link
          href="#"
          className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:bg-blue-700 transition-colors duration-300"
          role="button"
          aria-label="Book a call"
        >
          <HiPhone className="w-4 h-4" />
          Book A Call
        </Link>
        {/* Mobile Navbar */}
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <HiOutlineMenu className="w-6 h-6" />
        </button>
      </nav>
      {isOpen && (
        <motion.div
          ref={mobileMenuRef}
          className="absolute top-3 right-3 w-60 h-90 p-8 z-10 bg-black text-white rounded-2xl "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-4 items-center justify-center h-full">
            <li>
              <Link
                href="/services"
                aria-label="Services"
                className="hover:scale-105 transition-all duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                aria-label="about-us"
                className="hover:scale-105 transition-all duration-300"
              >
                Automatics
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                aria-label="Blog"
                className="hover:scale-105 transition-all duration-300"
              >
                Insights
              </Link>
            </li>

            <li>
              <Link
                href="/pricing"
                aria-label="Pricing"
                className="hover:scale-105 transition-all duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                aria-label="FAQ"
                className="hover:scale-105 transition-all duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                aria-label="Contact"
                className="hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/book-a-call"
                aria-label="Book a call"
                className="bg-white text-black rounded-full py-2 px-6 flex items-center gap-2"
              >
                <HiPhone className="w-4 h-4" />
                Book A Call
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
