"use client";

import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import AboutSection from "./components/home/aboutSection/AboutSection";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
import Technologies from "./components/home/technologiesSection/Technologies";
import QuoteSection from "./components/home/quoteSection/quoteSection";
import PricingFunnel from "./components/home/pricingFunnel/PricingFunnel";
import PremiumServices from "./components/home/premiumServices/PremiumServices";
import FaqSection from "./components/home/faqSection/faqSection";
import ProcessSection from "./components/home/processSection/ProcessSection";
import ContactModal from "./components/home/contactSection/ContactModal";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full">
      <HeroSection />
      <div className="flex flex-col max-w-7xl mx-auto items-center w-full">
        <Services />
        <ProcessSection />
        <PricingFunnel />
        <PremiumServices />
        <AboutSection />
        <Technologies />
        <FaqSection />
      </div>
      <ContactModal />
    </div>
  );
}
