import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";
import { Metadata } from "next";

export const metadata = {
  title: {
    default: "ThoughtLink - Your Digital Solutions Partner",
    template: "%s | ThoughtLink",
  },
  description:
    "Learn about ThoughtLink's mission to build custom digital solutions. We're more than just a tech company - we're your partner in building the future of digital solutions.",
  keywords: [
    "ThoughtLink",
    "digital solutions",
    "custom software",
    "tech company",
    "digital transformation",
  ],
  openGraph: {
    title: "ThoughtLink - Your Digital Solutions Partner",
    description:
      "Learn about ThoughtLink's mission to build custom digital solutions. We're more than just a tech company - we're your partner in building the future of digital solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen overflow-scroll bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
