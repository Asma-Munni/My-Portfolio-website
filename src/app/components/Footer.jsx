"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-24 border-t border-[#12305f]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16">

          {/* Left */}
          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Let’s Build Something Amazing Together
            </h2>

            <p className="text-zinc-400 text-lg leading-8">
              Passionate about building modern, scalable, and visually
              engaging web applications with clean code and user-focused
              experiences.
            </p>
          </div>

          {/* Middle */}
          <div className="lg:mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-[#00ff99]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-lg">

              <Link
                href="/"
                className="hover:text-[#00ff99] transition duration-300"
              >
                Home
              </Link>

              <Link
                href="#about"
                className="hover:text-[#00ff99] transition duration-300"
              >
                About
              </Link>

              <Link
                href="#projects"
                className="hover:text-[#00ff99] transition duration-300"
              >
                Projects
              </Link>

              <Link
                href="#contact"
                className="hover:text-[#00ff99] transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#00ff99]">
              Connect With Me
            </h3>

            <p className="text-zinc-400 text-lg leading-8 mb-8">
              Follow me on social platforms and let’s connect for future
              collaborations and opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5">

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition duration-300"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] hover:shadow-[0_0_20px_rgba(0,255,153,0.3)] transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#12305f] py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <h2 className="text-3xl font-extrabold">
            Asma
            <span className="text-[#00ff99]">
              .
            </span>
          </h2>

          {/* Copyright */}
          <p className="text-zinc-500 text-center">
            © 2025 Asma Munni. All Rights Reserved.
          </p>

          {/* Small Text */}
          <p className="text-zinc-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;