import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Basic access for personal use",
      features: ["Limited prompts", "Community access", "Basic support"],
    },
    {
      name: "Pro",
      price: "₹499/month",
      description: "Best for creators and developers",
      features: [
        "Unlimited prompts",
        "Save projects",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "₹1999/month",
      description: "For teams and businesses",
      features: [
        "All Pro features",
        "Team collaboration",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png" className="absolute inset-0 -z-10 size-full opacity" alt="" />
      <h1 className="text-3xl font-bold mb-8">Pricing Plans</h1>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold mt-2">{plan.price}</p>
            <p className="text-gray-600 mt-2">{plan.description}</p>

            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700">
                  • {feature}
                </li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;