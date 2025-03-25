import Image from "next/image";
import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
import FaqSection from "./components/home/faqSection/faqSection";
import QuoteSection from "./components/home/quoteSection/quoteSection";
import BlogSection from "./components/home/blogSection/BlogSection";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto items-center h-full">
      <HeroSection />
      <WhyUsSection />
      <Services />
      <QuoteSection />
      <BlogSection />
      <FaqSection />
    </div>
  );
}
