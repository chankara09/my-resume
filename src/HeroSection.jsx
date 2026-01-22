import React from "react";
// Import the specific icons from Lucide
import { Github, Phone, Mail, Facebook } from "lucide-react"; 

const HeroSection = () => {
  return (
    <header className="relative h-[110vh] flex flex-col items-center justify-center text-center bg-lime-300/40 backdrop-blur-lg border-b border-white/20 px-6">
      <div className="max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-900 mb-4">
          Laurize Jeante G. Wangkay
        </h1>
        <p className="text-xl md:text-2xl text-lime-900 font-semibold tracking-wide uppercase mb-12">
          Aspiring Web Developer <span className="text-lime-900 mx-2">|</span> University Athlete
        </p>

        {/* --- LUCIDE ICONS SECTION (Red 700) --- */}
        <div className="flex gap-10 md:gap-14 items-center justify-center text-red-700">
          
          {/* GitHub */}
          <a 
            href="https://github.com/chankara09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:-rotate-12 hover:text-red-800 filter drop-shadow-sm hover:drop-shadow-lg"
            title="GitHub"
          >
            <Github size={56} strokeWidth={2.5} />
          </a>

          {/* Phone */}
          <a 
            href="tel:+639399026073" 
            className="transition-all duration-300 hover:scale-125 hover:-rotate-6 hover:text-red-800 filter drop-shadow-sm hover:drop-shadow-lg"
            title="Call Me"
          >
            <Phone size={56} strokeWidth={2.5} />
          </a>

          {/* Email */}
          <a 
            href="mailto:laurize_wangkay@dlsu.edu.ph" 
            className="transition-all duration-300 hover:scale-125 hover:rotate-6 hover:text-red-800 filter drop-shadow-sm hover:drop-shadow-lg"
            title="Email Me"
          >
            <Mail size={56} strokeWidth={2.5} />
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com/LaurizeJeante" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-red-800 filter drop-shadow-sm hover:drop-shadow-lg"
            title="Facebook"
          >
            <Facebook size={56} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="absolute top-25 animate-soft-bounce">
        <p className="text-sm uppercase tracking-widest text-stone-600 mb-2">Scroll Down!</p>
        <svg 
          className="w-6 h-6 mx-auto text-stone-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;