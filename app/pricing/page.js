import PricingSection from "../components/home/pricingSection/pricingSection";

export const metadata = {
  title: "Pricing - ThoughtLink",
  description:
    "Choose a plan that fits your needs and budget. We offer a variety of pricing options to help you get the most out of our services.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto items-center h-full">
      <PricingSection />
    </div>
  );
}
