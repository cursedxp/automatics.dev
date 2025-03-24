import Link from "next/link";

export default function Navbar() {
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
        <ul className="flex gap-12" role="list">
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/case-studies" aria-label="case studies">
              Case studies
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/about-us" aria-label="about us">
              About Us
            </Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/blog" aria-label="Blog">
              Blog
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
          className="rounded-full py-2 px-6 bg-zinc-900 text-white hover:scale-105 hover:shadow-lg hover:cursor-pointer"
          role="button"
          aria-label="Book a call"
        >
          Book A Call
        </Link>
      </nav>
    </header>
  );
}
