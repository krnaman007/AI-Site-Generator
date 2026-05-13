import React, { useState } from "react";
import {
  Loader2Icon,
  Sparkles,
  CheckCircle2,
  Wand2,
  Rocket,
  LayoutDashboard,
} from "lucide-react";

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "SaaS landing page for AI tool",
    "Portfolio for designer",
    "E-commerce store for shoes",
    "Startup homepage for fintech app",
    "Blog website for travel writer",
  ];

  const features = [
    {
      icon: Wand2,
      title: "AI-Powered Generation",
      desc: "Generate beautiful and modern websites instantly with smart AI prompts.",
    },
    {
      icon: Rocket,
      title: "Launch Faster",
      desc: "From idea to deployment in minutes with optimized responsive layouts.",
    },
    {
      icon: LayoutDashboard,
      title: "Reusable Components",
      desc: "Clean UI blocks and scalable sections designed for modern startups.",
    },
  ];

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <main className="relative overflow-hidden bg-gray-50 text-gray-900 font-poppins">
      {/* 🌤 Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          alt="background"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl" />
      </div>

      {/* HERO */}
      <section className="relative flex flex-col items-center px-4 pt-10">
        {/* Banner */}
        <a className="mt-10 flex items-center gap-2 rounded-full border border-gray-300/40 bg-white/50 px-4 py-1 backdrop-blur-md transition hover:bg-white/70">
          <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs text-white font-semibold">
            NEW
          </span>
          <span className="text-sm text-gray-700">
            Try 30 days free trial
          </span>
        </a>

        {/* Heading */}
        <h1 className="mt-6 max-w-5xl text-center text-4xl font-semibold leading-tight md:text-6xl">
          Turn ideas into{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            stunning websites
          </span>{" "}
          instantly
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base text-gray-600 md:text-lg">
          Generate, customize, and launch your website in seconds using AI.
        </p>

        {/* FORM */}
        <form
          onSubmit={onSubmitHandler}
          className="relative mt-10 w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl transition focus-within:ring-2 ring-indigo-500"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            required
            placeholder="Describe your dream website..."
            className="w-full resize-none bg-transparent text-gray-800 placeholder-gray-400 outline-none"
          />

          {/* Suggestions */}
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setInput(s)}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs text-indigo-700 transition hover:bg-indigo-100"
              >
                {s}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative ml-auto mt-5 flex items-center justify-center">
            {/* Purple underglow */}
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-500/40 animate-pulse"></div>

            {/* Sweeping gradient shine */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute -inset-2 w-1/3 h-full bg-gradient-to-r from-white/40 via-white/20 to-white/0 transform -translate-x-full rotate-12 animate-[shine_2s_infinite]"></div>
            </div>

            <button
              type="submit"
              className="relative flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform duration-300 z-10"
            >
              {!loading ? (
                <>
                  <Sparkles size={16} className="relative z-10" />
                  <span className="relative z-10">Create with AI</span>
                </>
              ) : (
                <>
                  <Loader2Icon className="size-4 animate-spin relative z-10" />
                  <span className="relative z-10">Creating</span>
                </>
              )}
            </button>
          </div>
        </form>

{/* PREVIEW CARD */}
        <div className="relative mt-20 w-full max-w-6xl">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-indigo-300/20 to-pink-300/20 blur-3xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-2xl transition-transform hover:-translate-y-1">
            {/* Browser Header */}
            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-4 rounded-lg bg-gray-100 px-4 py-1 text-xs text-gray-600">
                ai-builder.dev
              </div>
            </div>

            {/* Content */}
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center space-y-5">
                {/* Heading Skeleton */}
                <div className="h-10 w-2/3 rounded-xl bg-gray-200 animate-pulse" />

                {/* Paragraph Skeleton */}
                <div className="space-y-3">
                  <div className="h-4 w-full rounded bg-gray-100 animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-gray-100 animate-pulse" />
                  <div className="h-4 w-4/6 rounded bg-gray-100 animate-pulse" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="h-32 rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-100 to-transparent transition hover:scale-[1.02] hover:shadow-md" />
                  <div className="h-32 rounded-2xl border border-gray-200 bg-gradient-to-br from-pink-100 to-transparent transition hover:scale-[1.02] hover:shadow-md" />
                </div>
              </div>

              {/* RIGHT TERMINAL */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 font-mono text-[13px] leading-6 shadow-inner">
                <div className="space-y-2">
                  <p className="animate-pulse text-green-500">&gt; Initializing AI engine...</p>
                  <p className="text-indigo-500">&gt; Generating responsive layout...</p>
                  <p className="text-pink-500">&gt; Creating reusable components...</p>
                  <p className="text-yellow-500">&gt; Optimizing performance...</p>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-gray-200" />

                {/* Success */}
                <div className="flex items-center gap-2 text-sm text-gray-900">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Website generated successfully</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
	        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Designed for modern creators
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to launch beautiful products faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:bg-indigo-50"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-pink-100 to-indigo-100 p-3">
                  <Icon className="h-6 w-6 text-indigo-500" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* LOGOS */}
      <section className="relative mt-10 w-full overflow-hidden py-10">
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-track flex opacity-70">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex min-w-max items-center gap-16 px-10"
            >
              {[
                "Google",
                "Microsoft",
                "OpenAI",
                "React",
                "JavaScript",
                "Adobe",
              ].map((brand, index) => (
                <div
                  key={index}
                  className="text-lg font-medium text-gray-500 transition hover:text-gray-900"
                >
                  {brand}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-semibold text-gray-900">
          What you can build
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "SaaS Landing Page",
            "Portfolio Website",
            "E-commerce Store",
            "Startup Homepage",
            "Blog Platform",
            "Admin Dashboard",
          ].map((item, i) => (
            <div
              key={i}
              className="group flex h-40 items-end rounded-2xl border border-gray-200 bg-white p-6 transition hover:scale-105 hover:shadow-lg hover:border-indigo-300"
            >
              <p className="text-gray-600 transition group-hover:text-gray-900">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-500">
        Built with AI ✨
      </footer>

      {/* Animations */}
      <style>{`
        .marquee-track {
          display: flex;
          animation: scroll 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </main>
  );
};

export default Home;