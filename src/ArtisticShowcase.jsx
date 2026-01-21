import React from "react";

import Drawing from "./assets/art/Drawing.png"; 
import Animation from "./assets/art/Animation.mp4"; 
import Pubmat from "./assets/art/Pubmat.png"; 

const GalleryItem = ({ title, type, content, medium, link }) => (
  <div className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center">
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group relative flex flex-col gap-6"
    >
      {/*THE FRAME*/}
      <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 bg-stone-100 transition-all duration-500 hover:shadow-red-200/50">
        {type === "video" ? (
          <video 
            src={content} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        ) : (
          <img 
            src={content} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
        )}

        <div className="absolute bottom-6 left-6 bg-white/30 backdrop-blur-xl border border-white/40 px-5 py-2 rounded-2xl shadow-lg z-20">
           <p className="text-stone-900 text-xs font-black uppercase tracking-widest">
              {medium}
           </p>
        </div>
      </div>

      {/*LABELS*/}
      <div className="px-4 text-center">
        <h3 className="font-black text-3xl md:text-4xl text-stone-900 group-hover:text-red-700 transition-colors tracking-tighter leading-tight">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-2">
           <div className="w-1 h-1 bg-green-700 rounded-full"></div>
           <p className="text-sm md:text-base text-green-700 font-bold uppercase tracking-[0.2em]">
             {type === "video" ? "Motion & Animation" : "Digital Illustration"}
           </p>
           <div className="w-1 h-1 bg-green-700 rounded-full"></div>
        </div>
      </div>
    </a>
  </div>
);

const ArtShowcase = () => {
  const artworks = [
    { 
      title: "Colored Sketch", 
      type: "image", 
      content: Drawing, 
      medium: "Digital Art",
      link: "https://drive.google.com/drive/folders/1oTTBMNpLKCqIXdasN8J1FeQkJX6RKpt0?usp=sharing" 
    },
    { 
      title: "Animation Meme", 
      type: "video", 
      content: Animation, 
      medium: "2D Animation",
      link: "https://drive.google.com/drive/folders/1ZkUZZSU0r2YhoXIcWK3ZrJxXZKDL0rPe?usp=drive_link" 
    },
    { 
      title: "Facebook PubMat", 
      type: "image", 
      content: Pubmat, 
      medium: "Publication Material",
      link: "https://drive.google.com/drive/folders/1wcH4CmTiMlD9YvrFLjw6h95e31R1t0f8?usp=sharing/" 
    },
  ];

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] bg-lime-300/30 backdrop-blur-2xl border-y border-white/20 py-24 my-20 overflow-visible">
      <div className="absolute top-[-10%] right-[15%] w-96 h-96 bg-green-400/20 blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[15%] w-96 h-96 bg-green-400/20 blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 mb-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
          <div>
            <span className="text-red-700 font-black tracking-[0.3em] uppercase text-sm mb-4 block">Creative Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-black text-stone-900 tracking-tighter leading-none mb-4">
              Artistic Portfolio
            </h2>
            <p className="text-xl text-stone-600 font-medium italic">
              Where sketching, animation, and <span className="text-red-700 font-bold not-italic">design converge</span>
            </p>
          </div>
          
          {/*BUTTONS*/}
          <div className="flex flex-col items-center md:items-end gap-6">
             <a 
                href="https://drive.google.com/drive/folders/1apcaMo4dLCycTAht_b3wPu3SfzhscUx6?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-red-700 text-white rounded-[2rem] text-xl font-black hover:bg-red-800 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap"
             >
                Explore Full Gallery
             </a>
             
             <div className="hidden md:flex flex-col items-end">
                <div className="flex gap-1 mb-2">
                    {[1,2,3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-red-900/20"></div>)}
                </div>
                <p className="text-xs font-bold text-red-900 uppercase tracking-widest">3 Featured Works</p>
             </div>
          </div>
        </div>
      </div>

      {/*HORIZONTAL GALLERY*/}
      <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar gap-10 md:gap-16 px-[7.5vw] md:px-[calc(50vw-300px)] pb-16">
        {artworks.map((art, index) => (
          <GalleryItem key={index} {...art} />
        ))}
        
        <div className="flex-shrink-0 w-[7.5vw] md:w-[calc(50vw-300px)]"></div>
      </div>
    </section>
  );
};

export default ArtShowcase;