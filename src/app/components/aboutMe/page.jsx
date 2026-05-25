"use client";

import Image from "next/image";
import logo from "@/image/portfolioBannerPic.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import {
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
} from "react-icons/si";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto leading-9">
            I build intuitive digital products with modern technologies,
            focusing on clean UI, responsive design, and scalable web
            applications.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Card */}
          <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] overflow-hidden shadow-[0_0_30px_rgba(0,123,255,0.08)]">

            {/* Image */}
            <div className="relative h-[450px]">
              <Image
                src={logo}
                alt="Asma Munni"
                fill
                className="object-cover "
              />
            </div>

            {/* Content */}
            <div className="p-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-8">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-zinc-300">
                  Available for work
                </span>
              </div>

              {/* Name */}
              <h2 className="text-4xl font-bold uppercase mb-5">
                Asma Munni
              </h2>

              {/* Bio */}
              <p className="text-zinc-400 text-lg leading-8">
                Passionate full stack developer focused on creating responsive,
                scalable, and visually engaging digital experiences for modern
                users.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-10">

                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300 cursor-pointer">
                  <FaInstagram size={22} />
                </div>

                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300 cursor-pointer">
                  <FaLinkedinIn size={22} />
                </div>

                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300 cursor-pointer">
                  <FaGithub size={22} />
                </div>

                <div className="w-14 h-14 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300 cursor-pointer">
                  <FaXTwitter size={22} />
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-10 bg-gradient-to-r from-[#0066ff] to-[#00aaff] py-4 rounded-2xl text-xl font-semibold hover:scale-[1.02] transition duration-300">
                Let’s Connect
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Intro Card */}
            <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-10 shadow-[0_0_30px_rgba(0,123,255,0.08)]">

              <h2 className="text-4xl font-bold mb-6">
                Hi! I’m{" "}
                <span className="text-[#00ff99]">
                  Asma Munni
                </span>
              </h2>

              <p className="text-zinc-400 text-lg leading-9 mb-8">
                I am a passionate full stack web developer who enjoys building
                modern, responsive, and user-friendly applications with clean
                code and scalable architecture.
              </p>

              <p className="text-zinc-400 text-lg leading-9">
                My focus is on creating high-performance digital experiences
                using modern frontend and backend technologies while constantly
                learning and improving my skills.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-10 shadow-[0_0_30px_rgba(0,123,255,0.08)]">

              <h2 className="text-4xl font-bold mb-5">
                My Tech Stack
              </h2>

              {/* Short Description */}
              <p className="text-zinc-400 text-lg leading-8 mb-10 max-w-3xl">
                I work with modern technologies to build responsive frontend
                interfaces, powerful backend systems, and scalable full stack
                applications.
              </p>

              {/* Icons */}
              <div className="flex flex-wrap items-center gap-8">

                <div className="w-24 h-24 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:scale-110 transition duration-300">
                  <SiJavascript size={42} className="text-yellow-400" />
                </div>

                <div className="w-24 h-24 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:scale-110 transition duration-300">
                  <SiNodedotjs size={42} className="text-green-500" />
                </div>

                <div className="w-24 h-24 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:scale-110 transition duration-300">
                  <SiPython size={42} className="text-yellow-300" />
                </div>

                <div className="w-24 h-24 rounded-full border border-[#184a91] flex items-center justify-center hover:border-[#00ff99] hover:scale-110 transition duration-300">
                  <SiReact size={42} className="text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-b from-[#071120] to-black border border-[#12305f] rounded-[35px] p-10 shadow-[0_0_30px_rgba(0,123,255,0.08)]">

              <h2 className="text-4xl font-bold mb-10">
                Experience
              </h2>

              <div className="space-y-8">

                {/* Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-5 gap-4">
                  <h3 className="text-2xl">Frontend Developer</h3>
                  <p className="text-zinc-400">Freelance Projects</p>
                  <span className="text-zinc-500">2025</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-5 gap-4">
                  <h3 className="text-2xl">Full Stack Learning</h3>
                  <p className="text-zinc-400">CodemanBD</p>
                  <span className="text-zinc-500">2025</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-5 gap-4">
                  <h3 className="text-2xl">React Projects</h3>
                  <p className="text-zinc-400">Personal Portfolio Work</p>
                  <span className="text-zinc-500">2024</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-800 pb-5 gap-4">
                  <h3 className="text-2xl">UI/UX Exploration</h3>
                  <p className="text-zinc-400">Self Learning</p>
                  <span className="text-zinc-500">2023</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;