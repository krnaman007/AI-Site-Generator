import React from "react";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "Basic access for personal use",
      features: ["Limited prompts", "Community access", "Basic support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹499/month",
      description: "Best for creators and developers",
      features: ["Unlimited prompts", "Save projects", "Priority support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹1999/month",
      description: "For teams and businesses",
      features: ["All Pro features", "Team collaboration", "Dedicated support"],
      popular: false,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 text-gray-900 font-poppins px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          alt="background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/40 bg-white/50 px-5 py-2 text-sm md:text-base text-gray-700 backdrop-blur-md">
          <Sparkles className="h-5 w-5 text-pink-500" />
          Flexible pricing for everyone
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Simple plans for{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            powerful website creation
          </span>
        </h1>

        <p className="mt-5 text-base md:text-lg text-gray-600">
          Start free and upgrade as your projects grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "border-indigo-500/40 bg-white/10 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
                : "border-gray-200 bg-white/50 hover:border-indigo-300"
            }`}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100 rounded-3xl" />

            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 px-4 py-1 text-xs md:text-sm font-semibold text-white shadow-lg">
                Most Popular
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{plan.name}</h2>

              <div className="mt-5">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}</span>
              </div>

              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">{plan.description}</p>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* Features */}
              <ul className="space-y-4 text-sm md:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-indigo-100">
                      <Check className="h-3 w-3 text-indigo-500" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full rounded-2xl py-3 text-base md:text-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg hover:scale-[1.02]"
                    : "border border-gray-200 bg-white/50 text-gray-900 hover:bg-indigo-50"
                }`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="mt-16 text-center text-sm md:text-base text-gray-500">
        No hidden fees. Cancel anytime.
      </p>
    </main>
  );
};

export default Pricing;