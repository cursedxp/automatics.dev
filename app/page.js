import Image from "next/image";
import HeroSection from "./components/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto h-full">
      <HeroSection />
    </div>
  );
}
