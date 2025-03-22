import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-3">
        <div className="flex items-center">
          <p className="text-2xl font-bold">ThoughtLink</p>
        </div>
        <ul className="flex gap-12">
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/case-studies">Case studies</Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="hover:scale-105 transition-all duration-300">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
        <Link href="#" className="rounded-lg py-2 px-6 bg-zinc-900 text-white">
          Book A Call
        </Link>
      </div>
    </div>
  );
}
