import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import { UserButton } from "@daveyplate/better-auth-ui";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { data: session } = authClient.useSession();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "My Projects", path: "/projects" },
    { name: "Community", path: "/community" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-7xl px-6 py-3 backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl shadow-xl">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={assets.logo} alt="logo" className="h-6 sm:h-8" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {link.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-indigo-600 font-semibold">
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {!session?.user ? (
          <button
            onClick={() => navigate("/auth/signin")}
            className="px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-400/40 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </button>
        ) : (
          <UserButton size="icon" />
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-indigo-50 active:scale-95 transition"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu (optional) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[90%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg flex flex-col items-center gap-4 py-4 text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2 rounded hover:bg-indigo-50 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;