import React from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { authClient } from '../lib/auth-client';
import {UserButton} from '@daveyplate/better-auth-ui'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const {data: session} = authClient.useSession()

  return (
    <>
      <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b text-white border-slate-800">
        
        <Link to="/">
          <img src={assets.logo} alt="logo" className="h-5 sm:h-7" />
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link to="/">Home</Link>
          <Link to="/projects">My Projects</Link>
            <Link to="/community">Community</Link>
            <Link to="/pricing">Pricing</Link>
            </div>

            <div className="flex items-center gap-3">
            {!session?.user ? (
                <button
                onClick={() => navigate('/auth/signin')}
                className="px-6 py-1.5 max-sm:text-sm bg-indigo-600 active:scale-95 hover:bg-indigo-700 shadow-[0px_0px_30px_5px] shadow-white/50 transition rounded-full"
            >
                Get started
            </button>  
            ) : (
              <UserButton size='icon'/>
            )
              }

            <button
                id="open-menu"
                className="md:hidden active:scale-90 transition"
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

      </nav>
    </>
  );
};

export default Navbar;