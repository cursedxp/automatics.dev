import Link from "next/link";
import { HiPhone, HiMail } from "react-icons/hi";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="py-12 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-black">ThoughtLink</h3>
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
                <Link href="/case-studies" className="text-black">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-black">
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
                <Link href="/terms" className="text-black">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-black">
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
                <a href="mailto:hi@thoughtlink.io" className="text-black">
                  hi@thoughtlink.io
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-black">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-black">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-black">
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-black">
          <p>
            &copy; {new Date().getFullYear()} ThoughtLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
