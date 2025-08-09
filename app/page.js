import Image from "next/image";
import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
import Technologies from "./components/home/technologiesSection/Technologies";
import QuoteSection from "./components/home/quoteSection/quoteSection";
import PricingFunnel from "./components/home/pricingFunnel/PricingFunnel";
import WhyPricingModelWorksSection from "./components/home/whyPricingModelWorksSection/WhyPricingModelWorksSection";
import PremiumServices from "./components/home/premiumServices/PremiumServices";
import BlogSection from "./components/home/blogSection/BlogSection";
import FaqSection from "./components/home/faqSection/faqSection";
import ProcessSection from "./components/home/processSection/ProcessSection";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center h-full">
      <HeroSection />
      <WhyUsSection />
      <Services />
      <Technologies />
      <QuoteSection />
      <ProcessSection />
      <PricingFunnel />
      <WhyPricingModelWorksSection />
      <PremiumServices />
      <BlogSection />
      <FaqSection />
    </div>
  );
}
