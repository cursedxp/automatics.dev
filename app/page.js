import Image from "next/image";
import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
import Technologies from "./components/home/technologiesSection/Technologies";
import QuoteSection from "./components/home/quoteSection/quoteSection";
import PricingSection from "./components/home/pricingSection/pricingSection";
import BlogSection from "./components/home/blogSection/BlogSection";
import FaqSection from "./components/home/faqSection/faqSection";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center h-full">
      <HeroSection />
      <WhyUsSection />
      <Services />
      <Technologies />
      <QuoteSection />
      <PricingSection />
      <BlogSection />
      <FaqSection />
    </div>
  );
}
