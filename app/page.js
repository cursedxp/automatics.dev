import Image from "next/image";
import HeroSection from "./components/home/heroSection/HeroSection";
import Services from "./components/home/servicesSection/Services";
import WhyUsSection from "./components/home/whyUsSection/WhyUsSection";
export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto items-center h-full">
      <HeroSection />
      <WhyUsSection />
      <Services />
    </div>
  );
}
