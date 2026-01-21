import React from "react";
import confetti from "canvas-confetti";
import TrophyTei from "./assets/TrophyTei.jpg"; 

const AthleticShowcase = () => {
  
   {/*FIRE WORKS*/}
  const handlePhotoClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const duration = 3 * 1000; 
    const animationEnd = Date.now() + duration;
    const colors = ["#ef4444", "#ffffff", "#fbbf24"]; 

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x, y },
        colors: colors,
        zIndex: 999,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x, y },
        colors: colors,
        zIndex: 999,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  };

  const stats = [
    { label: "Sport", value: "Track and Field" },
    { label: "Event", value: "Walkathon / Long Distance" },
    { label: "Experience", value: "9 Years Varsity" },
    { label: "Recognition", value: "National Level" },
  ];

  {/*ARTICLES*/}
  const mediaLinks = [
    { 
      title: "Biñan City’s Wangkay defends walkathon crown", 
      source: "The Manila Times", 
      url: "https://www.manilatimes.net/2019/03/23/sports/sports-top/binan-citys-wangkay-defends-walkathon-crown/529643" 
    },
    { 
      title: "Davao bags 1st gold in PH National Games;", 
      source: "Rappler", 
      url: "https://www.rappler.com/sports/results-philippine-national-games-batang-pinoy-december-18-2023/" 
    },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden my-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/*LEFT SIDE*/}
        <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-black rounded-full uppercase tracking-widest">
              University Athlete
            </span>
            <div className="h-px flex-grow bg-red-100"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter mb-6 leading-tight">
            Discipline on the Track, <br />
            <span className="text-green-800">Excellence in the Code.</span>
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed mb-8 text-justify">
            Beyond the keyboard, I contributed to the University’s success in medals and championships during the UAAP competitions. We won the UAAP S86 Women Division Championship. I have also competed in national games, including the Philippine National Games and PATAFA events.  
          </p>
          <div className="mb-8">
            <h4 className="text-xs font-bold text-red-700 uppercase tracking-widest mb-4 flex items-center gap-2">
               <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
               In the Media & Highlights
            </h4>
            <div className="grid gap-3">
              {mediaLinks.map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-red-50/30 border border-red-100 rounded-2xl hover:bg-red-50 transition-all duration-300"
                >
                  <div>
                    <p className="font-bold text-stone-800 group-hover:text-red-700 transition-colors leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider font-semibold">
                      {item.source}
                    </p>
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-sm text-red-500 transform group-hover:translate-x-1 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-100">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">
                  {stat.label}
                </p>
                <p className="text-lg font-black text-stone-800">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*RIGHT SIDE*/}
        <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-full bg-red-50 group">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-[100px]"></div>
          </div>

          <a 
            href="https://www.facebook.com/DLSUTrackandField" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handlePhotoClick}
            className="block w-full h-full cursor-pointer relative z-10 overflow-hidden"
          >
            <img 
                src={TrophyTei} 
                alt="Tei Trophy Shot" 
                className="w-full h-full object-cover object-[center_70%] lg:absolute lg:inset-0 transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl shadow-lg transition-all duration-300 group-hover:bg-white/40 group-hover:scale-105">
                <p className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-sm">
                    Click the Pic to Support My Team!
                </p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default AthleticShowcase;