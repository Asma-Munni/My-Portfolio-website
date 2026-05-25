"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md text-white px-6 md:px-12 py-5 border-b border-[#0f172a] sticky top-0 z-50 shadow-[0_0_25px_rgba(0,255,153,0.08)]">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
          Developer
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">

          <Link
            href="#about"
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            About Me
          </Link>

          <Link
            href="#experience"
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            Experience
          </Link>

          <Link
            href="#projects"
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="text-lg font-semibold hover:text-[#00ff99] transition duration-300"
          >
            Contact Me
          </Link>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-5">

          {/* Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-9 flex items-center rounded-full p-1 border transition duration-300 ${
              darkMode
                ? "bg-zinc-900 border-zinc-700 shadow-[0_0_15px_rgba(0,255,153,0.2)]"
                : "bg-white border-black"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full bg-[#00ff99] transform transition duration-300 ${
                darkMode ? "translate-x-0" : "translate-x-7"
              }`}
            ></div>
          </button>

          {/* CV Button */}
          <button className="border border-zinc-700 bg-zinc-900/40 px-6 py-3 rounded-full text-lg font-medium hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.35)] transition duration-300">
            Download CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? (
            <X size={32} className="text-[#00ff99]" />
          ) : (
            <Menu size={32} className="text-[#00ff99]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-6 bg-[#050816] border border-[#112240] rounded-3xl p-6 flex flex-col gap-6 shadow-[0_0_30px_rgba(0,255,153,0.08)]">

          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            About Me
          </Link>

          <Link
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            Experience
          </Link>

          <Link
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-[#00ff99] transition duration-300"
          >
            Contact Me
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-16 h-9 flex items-center rounded-full p-1 border transition duration-300 ${
              darkMode
                ? "bg-zinc-900 border-zinc-700 shadow-[0_0_15px_rgba(0,255,153,0.2)]"
                : "bg-white border-black"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full bg-[#00ff99] transform transition duration-300 ${
                darkMode ? "translate-x-0" : "translate-x-7"
              }`}
            ></div>
          </button>

          {/* Mobile CV Button */}

          <Link href={"/public/Asma_Munni_CV_Soft.pdf"} >
          <button 
          
          className="border border-zinc-700 bg-zinc-900/40 px-6 py-3 rounded-full text-lg font-medium hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.35)] transition duration-300">
            Download CV
          </button>
          </Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;