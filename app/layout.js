import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";
import { Metadata } from "next";
import Footer from "./components/home/footer/Footer";
export const metadata = {
  title: {
    default: "automatics - Your Digital Solutions Partner",
    template: "%s | automatics",
  },
  description:
    "Learn about automatics&apos;s mission to build custom digital solutions. We&apos;re more than just a tech company - we&apos;re your partner in building the future of digital solutions.",
  keywords: [
    "automatics",
    "digital solutions",
    "custom software",
    "tech company",
    "digital transformation",
  ],
  openGraph: {
    title: "automatics - Your Digital Solutions Partner",
    description:
      "Learn about automatics&apos;s mission to build custom digital solutions. We&apos;re more than just a tech company - we&apos;re your partner in building the future of digital solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen overflow-scroll bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
