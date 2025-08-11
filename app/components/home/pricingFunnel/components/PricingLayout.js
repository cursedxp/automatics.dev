"use client";

const PricingLayout = ({ children }) => (
  <section
    id="pricing"
    className="flex flex-col items-center justify-center w-full my-20"
    role="region"
    aria-labelledby="pricing-heading"
  >
    <div className="max-w-7xl mx-auto w-full px-8">
      {children}
    </div>
  </section>
);

export default PricingLayout;