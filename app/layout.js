import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";
import { Metadata } from "next";
import Footer from "./components/home/footer/Footer";
export const metadata = {
  title: {
    // default: "automatics — Workflows and apps that keep your data consistent",
    default: "automatics - Business apps & automations for SMBs",
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
  alternates: {
    canonical: "https://automatics.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBGGGF4X');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="w-screen overflow-scroll bg-gray-100">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBGGGF4X"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
