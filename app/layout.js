import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";
import { Metadata } from "next";
import Footer from "./components/home/footer/Footer";
export const metadata = {
  title: {
    default: "Automatics - Your Digital Solutions Partner",
    template: "%s | Automatics",
  },
  description:
    "Learn about Automatics's mission to build custom digital solutions. We're more than just a tech company - we're your partner in building the future of digital solutions.",
  keywords: [
    "Automatics",
    "digital solutions",
    "custom software",
    "tech company",
    "digital transformation",
  ],
  openGraph: {
    title: "Automatics - Your Digital Solutions Partner",
    description:
      "Learn about Automatics's mission to build custom digital solutions. We're more than just a tech company - we're your partner in building the future of digital solutions.",
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
