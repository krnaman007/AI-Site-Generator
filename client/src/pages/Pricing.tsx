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
      features: [
        "Unlimited prompts",
        "Save projects",
        "Priority support",
      ],
      popular: true,
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
      popular: false,
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white font-poppins">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          alt="background"
          className="h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-pink-400" />
          Flexible pricing for everyone
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          Simple plans for{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            powerful website creation
          </span>
        </h1>

        <p className="mt-5 text-lg text-gray-400">
          Start free and upgrade as your projects grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "border-indigo-500/40 bg-white/[0.08] shadow-[0_0_60px_rgba(99,102,241,0.15)]"
                : "border-white/10 bg-white/5 hover:border-white/20"
            }`}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />

            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                Most Popular
              </div>
            )}

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>

              <div className="mt-5">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>

              <p className="mt-4 leading-7 text-gray-400">
                {plan.description}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/20 to-indigo-500/20">
                      <Check className="h-3 w-3 text-indigo-300" />
                    </div>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full rounded-2xl py-3 font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg hover:scale-[1.02]"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <p className="mt-16 text-center text-sm text-gray-500">
        No hidden fees. Cancel anytime.
      </p>
    </main>
  );
};

export default Pricing;