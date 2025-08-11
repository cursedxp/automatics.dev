"use client";
import { PricingFunnelProvider } from "./context/PricingFunnelContext";
import PricingLayout from "./components/PricingLayout";
import PricingHeader from "./components/PricingHeader";
import PricingCard from "./components/PricingCard";

// Main content component
const PricingFunnelContent = () => (
  <PricingLayout>
    <PricingHeader />
    <PricingCard />
  </PricingLayout>
);

// Main export with provider wrapper
const PricingFunnel = () => (
  <PricingFunnelProvider>
    <PricingFunnelContent />
  </PricingFunnelProvider>
);

export default PricingFunnel;