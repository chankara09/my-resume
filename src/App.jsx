import FloatingBackground from "./FloatingBackground";
import FloatingBackground2 from "./FloatingBackground2";
import HeroSection from "./HeroSection";
import Profile from "./Profile";
import TechnicalSkills from "./TechnicalSkills";
import FigmaShowcase from "./FigmaShowcase";
import Experience from "./Experience";
import AthleteShowcase from "./AthleteShowcase";
import ArtisticShowcase from "./ArtisticShowcase";
import TrustMeReal from "./TrustMeReal";
import MusicPlay from "./MusicPlay";

import QR from "./assets/QR.png"; 

function App() {
  return (
    <div className="relative min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <FloatingBackground />
      <FloatingBackground2 />
      <HeroSection />

      {/* MAIN CONTENT WRAPPER */}
      <main className="max-w-6xl mx-auto px-6 pb-20 -mt-16 relative z-10">
        <Profile />
        <div className="w-full mt-12">
           <TechnicalSkills />
        </div>
        <FigmaShowcase />
        <Experience />
        <ArtisticShowcase />
        <AthleteShowcase />
        <TrustMeReal />
      </main>

      {/* FOOTER (Cleaned up to work with the floating QR) */}
      <footer className="py-12 mt-20 border-t border-stone-200/50 bg-white/30 backdrop-blur-md relative z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
             <p className="text-stone-400 text-sm font-medium">
              © 2026 Laurize Jeante Wangkay. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-[10px] font-black text-green-700 uppercase tracking-[0.2em]">
                Available for Internship 2026
              </p>
            </div>
            <p className="text-[10px] text-stone-300 uppercase tracking-widest">
              Designed & Built with React + Tailwind v4
            </p>
          </div>
        </div>
      </footer>

      <div className="hidden lg:flex fixed bottom-8 left-8 z-50 items-center gap-4 group">
        
        {/*QR*/}
        <div className="bg-white/80 backdrop-blur-xl p-2.5 rounded-2xl shadow-2xl border border-white/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white">
          <img 
            src={QR} 
            alt="Scan to Connect" 
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        <MusicPlay />

        {/* The "Slide-out" Label */}
        <div className="opacity-0 -translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-green-400 mb-1">
              Connect Digitally
            </p>
            <p className="text-xs font-bold leading-tight">
              Scan to view <br /> social links
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;