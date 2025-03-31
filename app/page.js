import Image from "next/image";
import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
import FaqSection from "./components/home/faqSection/faqSection";
import QuoteSection from "./components/home/quoteSection/quoteSection";
import BlogSection from "./components/home/blogSection/BlogSection";
import FooterSection from "./components/home/footerSection/FooterSection";
import Technologies from "./components/home/technologiesSection/Technologies";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center h-full">
      <HeroSection />
      <WhyUsSection />
      <Services />
      <Technologies />
      <QuoteSection />
      <BlogSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
