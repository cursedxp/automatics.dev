"use client";
import Link from "next/link";
import { HiOutlineMenu, HiPhone } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className="w-full">
      <nav
        className="max-w-screen-xl mx-auto flex justify-between items-center p-3"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <h1>ThoughtLink</h1>
          </Link>
        </div>
        {/* Desktop Navbar */}
        <ul className="gap-12 hidden lg:flex" role="list">
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/services" aria-label="services">
              Services
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/about-us" aria-label="about us">
              About Us
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/blog" aria-label="Blog">
              Updates
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
          className="hidden lg:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:cursor-pointer"
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
          className="absolute top-3 right-3 w-60 h-fit p-8 z-10 bg-black text-white rounded-2xl "
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
                aria-label="About"
                className="hover:scale-105 transition-all duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                aria-label="Blog"
                className="hover:scale-105 transition-all duration-300"
              >
                Updates
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
