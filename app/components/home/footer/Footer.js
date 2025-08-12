"use client";
import Link from "next/link";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Logo from "@/app/components/common/Logo";
const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
      <div className="max-w-screen-xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="w-35" />
            <p className="text-black">
              Empowering businesses with innovative solutions and cutting-edge
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Automatics
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-black">
                <HiMail className="w-5 h-5" />
                <a
                  href="mailto:hi@automatics.io"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  hi@automatics.io
                </a>
              </div>
              <div className="flex items-center gap-2 text-black">
                <HiPhone className="w-5 h-5" />
                <Link
                  href="https://calendly.com/d/csxj-m6y-ssx/meet-with-the-automatics-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  Book A Call
                </Link>
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-black hover:scale-105 transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-black">
          <p>
            &copy; {new Date().getFullYear()} Automatics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
