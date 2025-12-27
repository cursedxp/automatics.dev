export default function PlanCard({ plan }) {
  return (
    <div className="relative p-8 transition-all duration-300 flex flex-col text-sm min-h-[500px]">
      <div className="text-left mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          {plan.popular && (
            <div className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
              Most Popular
            </div>
          )}
        </div>
        {plan.tagline && (
          <p className="text-sm text-gray-500 mb-2"> {plan.tagline}</p>
        )}
        {plan.subtitle && (
          <p className="text-sm text-gray-600 mb-2">{plan.subtitle}</p>
        )}
        {plan.priceNote && (
          <p className="text-sm text-black font-medium mb-4">
            {plan.priceNote}
          </p>
        )}
        {/* Price removed - will discuss pricing in consultation */}
        <p className="text-gray-600">{plan.description}</p>
      </div>
      <ul className="space-y-4 mb-8 grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {plan.cta && (
        <div className="mt-auto">
          <a
            href="https://calendly.com/mircea-automatics/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-3 px-6 rounded-full text-center font-semibold hover:bg-gray-800 transition-colors duration-300 inline-block"
          >
            {plan.cta}
          </a>
        </div>
      )}
    </div>
  );
}
