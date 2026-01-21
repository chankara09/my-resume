import React from "react";
import project1Img from "./assets/STHIUXFINAL.png";
import project2Img from "./assets/CCINOV8FINAL.png";
import project3Img from "./assets/CSSWENGFINAL.png";

const ProjectWindow = ({ name, description, link, image, contributions }) => (
   <div className="flex-shrink-0 w-[85vw] md:w-[750px] snap-center">
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col gap-6 transition-all duration-500"
    >
      {/*THE WINDOW FRAME*/}
      <div className="relative w-full aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/40 bg-stone-200">
        <div className="absolute top-0 inset-x-0 h-10 md:h-12 bg-white/90 backdrop-blur-md flex items-center px-6 gap-2.5 z-20 border-b border-stone-200/50">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <div className="ml-4 h-5 w-48 bg-stone-200/50 rounded-full"></div>
        </div>

        <div className="w-full h-full pt-10 md:pt-12 relative overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
             <div className="px-10 py-4 bg-white rounded-2xl text-xl font-black text-stone-900 shadow-2xl">Open Design</div>
          </div>
        </div>
      </div>

      {/*LABELS SECTION*/}
      <div className="px-4">
        <h3 className="font-black text-3xl md:text-5xl text-stone-900 group-hover:text-green-800 transition-colors tracking-tighter">
          {name}
        </h3>

        <p className="text-lg md:text-xl text-red-600 font-bold uppercase tracking-[0.3em] mt-2">
          {description}
        </p>

        <div className="mt-4 border-l-2 border-green-500/30 pl-4 py-1">
          <p className="text-xs md:text-sm text-black font-bold uppercase tracking-widest mb-1">
            My Contributions:
          </p>
          <p className="text-sm md:text-lg text-stone-600 font-medium leading-relaxed">
            {contributions}
          </p>
        </div>
      </div>
    </a>
  </div>
);

const FigmaShowcase = () => {
  const projects = [
    { name: "Pseudo Fashion App", description: "UI/UX • Mobile Prototype", link: "https://www.figma.com/design/jTPIywKzXhpRYW2OOzH0C8/-STHICIUX--Prototype-V.1?node-id=0-1&t=cbljZ9uUtwLwp82z-1.com/...", image: project1Img, contributions: "Lead Concept Developer • Interactive Prototyping • Visual Identity Design"},
    { name: "Mentorch", description: "UI/UX • Landing Dashboard", link: "https://www.figma.com/design/SGCuX4loES2LaX8cSXJg8x/MENTORch-MVP?node-id=0-1&t=hWbYwmsDMzfsmHP7-1.com/...", image: project2Img, contributions: "Landing Dashboard Sequence • Component Library Creation• Visual Identity Design" },
    { name: "Indigo Studio", description: "UI/UX • Reservation UI", link: "https://www.figma.com/design/nXKKQ4N68GGbVtunioCR8X/CSSWENG---Indigo-Studio?node-id=0-1&t=gzO1nHpTvNvLmWMK-1.figma.com/...", image: project3Img, contributions: "Information Architecture • Lead Visual Designer • End-to-End User Flow"},
  ];

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] bg-red-400/30 backdrop-blur-2xl border-y border-white/20 py-24 my-20 overflow-visible">
      
      {/*HEADER*/}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-green-800 font-black tracking-[0.3em] uppercase text-sm mb-4 block">Creative Portfolio</span>
            <h2 className="text-6xl md:text-8xl font-black text-stone-900 tracking-tighter leading-none mb-4">
              Design Portfolio
            </h2>
            <p className="text-xl text-stone-600 font-medium italic">
              Scroll or use <span className="text-green-800 font-bold not-italic">Shift + Scroll</span> to explore
            </p>
          </div>
        </div>
      </div>

      {/* HORIZONTAL SCROLLING CONTAINER */}
      <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar-red gap-8 md:gap-12 px-[7.5vw] md:px-[calc(50vw-375px)] pb-16">
        {projects.map((p) => (
          <ProjectWindow key={p.name} {...p} />
        ))}
        
        <div className="flex-shrink-0 w-[7.5vw] md:w-[calc(50vw-375px)]"></div>
      </div>

      <div className="md:hidden flex justify-center gap-1 mt-4">
        <div className="w-8 h-1 bg-red-600 rounded-full"></div>
        <div className="w-2 h-1 bg-red-200 rounded-full"></div>
        <div className="w-2 h-1 bg-red-200 rounded-full"></div>
      </div>
    </section>
  );
};

export default FigmaShowcase;