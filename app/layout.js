import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";
import { Metadata } from "next";
import Footer from "./components/home/footer/Footer";
export const metadata = {
  title: {
    default: "automatics — Workflows and apps that keep your data consistent",
    template: "%s | automatics",
  },
  description:
    "We automate workflows and build internal + customer-facing apps that keep your data consistent. Audit, Build Sprints, and Operate retainers.",
  keywords: [
    "automatics",
    "digital solutions",
    "custom software",
    "tech company",
    "digital transformation",
  ],
  openGraph: {
    title: "Business apps & workflows that keep your data consistent",
    description:
      "Automate workflows, connect tools, and build internal + customer-facing apps. Clear delivery through Audit, Build Sprints, and Operate.",
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
