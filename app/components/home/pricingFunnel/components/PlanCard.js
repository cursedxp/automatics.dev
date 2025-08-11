export default function PlanCard({ plan, index, plans }) {
  return (
    <div
      className={`relative p-8 transition-all duration-300 flex flex-col text-sm min-h-[500px] ${
        index < plans.length - 1 ? "" : ""
      }`}
    >
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
          <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
        )}
        <div className="text-4xl font-bold mb-4">{plan.price}</div>
        <p className="text-gray-600">{plan.description}</p>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
