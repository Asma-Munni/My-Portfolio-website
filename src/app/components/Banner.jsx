"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/image/portfolioBannerPic.png";

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side */}
        <div className="flex-1">
          
          {/* Small Intro */}
          <h3 className="text-[#00ff99] text-2xl md:text-3xl font-semibold mb-6">
            Hi, I am Asma Munni
          </h3>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-extrabold leading-none uppercase text-white">
            Full Stack
          </h1>

          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-extrabold leading-none uppercase text-zinc-400">
            Web Developer
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-2xl leading-8">
            I build responsive and modern web applications with clean UI,
            scalable backend systems, and user-focused experiences using
            modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
            
            <Link href="#contact">
              <button className="bg-[#00ff99] text-black px-10 py-4 rounded-2xl text-xl font-semibold hover:scale-105 transition duration-300">
                Contact Me
              </button>
            </Link>

            <button className="border border-zinc-600 px-10 py-4 rounded-2xl text-xl font-medium hover:border-[#00ff99] hover:text-[#00ff99] transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center relative">
          
          {/* Glow Effect */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#00ff99] opacity-20 blur-[120px] rounded-full"></div>

          {/* Main Image */}
          <div className="relative z-10">
            <Image
              src={logo}
              alt="Developer"
              width={700}
              height={700}
              className="object-contain drop-shadow-[0_0_40px_rgba(0,255,153,0.4)] rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;