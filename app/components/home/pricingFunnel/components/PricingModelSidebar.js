function PricingFeature({ title, description }) {
  return (
    <div>
      <h4 className="text-base font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function PricingModelSidebar() {
  return (
    <div className="bg-gray-50 border-l border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Why Our Pricing Model Works
      </h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Our subscription-based approach eliminates the traditional pain points of project-based pricing, giving you predictable costs and unlimited flexibility.
      </p>

      <div className="space-y-4">
        <PricingFeature
          title="No Hourly Bills"
          description="Forget about tracking hours or surprise invoices. You pay a flat monthly rate based on how many tasks we can work on at the same time (for example, 1 task at a time, 2 tasks at a time, etc.)."
        />
        <PricingFeature
          title="Unlimited Requests"
          description="There's no limit to the number of ideas, improvements, or bug fixes you can propose. Simply add them to your backlog. We will plan and execute them one by one (or several at once, depending on your subscription) in our ongoing monthly cycles."
        />
        <PricingFeature
          title="Adjust as Needed"
          description="Our subscription model is month-to-month. Need to speed up development? Increase the number of parallel tasks. Need to pause or slow down? You can scale back – no long-term contracts locking you in. It's flexibility that grows with your business."
        />
      </div>
    </div>
  );
}