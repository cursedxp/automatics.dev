import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-3">
        <ul className="flex gap-4">
          <li>
            <Link href="/case-studies">Case studies</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
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
