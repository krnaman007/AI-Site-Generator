import React, { useState } from "react";
import { Loader2Icon, Sparkles } from "lucide-react";

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

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  // const logos = [
  //   { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", alt: "Google" },
  //   { src: "https://cdn-icons-png.flaticon.com/512/732/732221.png", alt: "Microsoft" },
  //   { src: "https://cdn-icons-png.flaticon.com/512/6133/6133341.png", alt: "OpenAI" },
  //   { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  //   { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  //   { src: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg", alt: "Adobe" },
  // ];

  return (
    <section className="relative flex flex-col items-center text-white px-4 overflow-hidden font-poppins">

      {/* 🌌 Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
      </div>

      {/* ✨ Banner */}
      <a className="mt-20 flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-4 py-1 hover:bg-white/10 transition">
        <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">NEW</span>
        <span className="text-sm text-gray-300">Try 30 days free trial</span>
      </a>

      {/* 🚀 Heading */}
      <h1 className="text-center text-4xl md:text-6xl font-semibold mt-6 max-w-4xl leading-tight">
        Turn ideas into{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          stunning websites
        </span>{" "}
        instantly
      </h1>

      <p className="text-gray-400 text-center max-w-lg mt-4 text-base">
        Generate, customize, and launch your website in seconds using AI.
      </p>

      {/* 🧠 Form */}
      <form
        onSubmit={onSubmitHandler}
        className="relative mt-10 w-full max-w-2xl rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl focus-within:ring-2 ring-indigo-500 transition"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500 resize-none"
          rows={4}
          placeholder="Describe your dream website..."
          required
        />

        {/* Suggestions */}
        <div className="flex flex-wrap gap-2 mt-4">
          {suggestions.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInput(s)}
              className="text-xs px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {s}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button className="group ml-auto mt-4 flex items-center gap-2 bg-gradient-to-r from-pink-500 to-indigo-600 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition">
          {!loading ? (
            <>
              <Sparkles size={16} />
              Create with AI
            </>
          ) : (
            <>
              Creating
              <Loader2Icon className="animate-spin size-4" />
            </>
          )}
        </button>
      </form>

      {/* 🖥️ Live Preview */}
      <div className="mt-16 w-full max-w-xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-3xl"></div>

        <div className="relative bg-black/60 border border-white/10 rounded-xl p-6 backdrop-blur-xl shadow-xl">
          <p className="text-sm text-gray-400 mb-3">Live Preview</p>

          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="bg-black rounded-lg p-4 text-xs text-green-400 font-mono">
            {'>'} Generating layout... <br />
            {'>'} Creating components... <br />
            {'>'} Deploying... <br />
            <span className="text-white">✓ Your site is live</span>
          </div>
        </div>
      </div>

      {/* 🔁 Logos */}
      <div className="relative w-full mt-20 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* <div className="marquee-track flex opacity-70">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-10 min-w-max">
              {logos.map((logo, index) => (
                <img key={index} src={logo.src} className="h-7 hover:opacity-100 transition" />
              ))}
            </div>
          ))}
        </div> */}
      </div>

      {/* 🧱 Showcase */}
      <section className="px-6 py-24 max-w-6xl w-full">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What you can build
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
              className="group bg-white/5 border border-white/10 rounded-xl p-6 h-40 flex items-end hover:scale-105 hover:border-indigo-500 transition"
            >
              <p className="text-gray-300 group-hover:text-white transition">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 Animations */}
      <style>{`
        .marquee-track {
          display: flex;
          animation: scroll linear infinite;
          animation-duration: 25s;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default Home;