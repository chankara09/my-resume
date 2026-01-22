import React from "react";
// Import the images here since this is the only place they are used
import TeiImg from "./assets/AthleteTei.png"; 
import FormalTeiImg from "./assets/FormalTei.png"; 

const ProfileSection = () => {
  return (
    /*GRID CONTAINER*/
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
      
      {/*LEFT BOX COLUMN*/}
      <div className="md:col-span-4 sticky top-10 group">
        
        {/*THE WHITE CARD*/}
        <div className="relative mt-32 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50">
          
          {/*BIG PHOTO WRAPPER*/}
          <div className="relative -mt-44 mx-auto w-64 h-80">
            <a href="https://www.facebook.com/LaurizeJeante/" target="_blank" rel="noopener noreferrer">
              <img src={FormalTeiImg} alt="Normal" className="absolute inset-0 w-full h-full object-cover object-[center_15%] rounded-3xl shadow-2xl transition-opacity duration-500 group-hover:opacity-0" />
            </a>
            <a href="https://www.facebook.com/LaurizeJeante/" target="_blank" rel="noopener noreferrer">
              <img src={TeiImg} alt="Action" className="absolute inset-0 w-full h-full object-cover object-[center_10%] rounded-3xl shadow-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
          </div>

          {/*TEXT AREA INSIDE CARD*/}
          <div className="pt-8 text-center">
            <div className="relative h-10 mb-2 flex items-center justify-center">
              <p className="absolute inset-x-0 text-center transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-3 text-xl md:text-2xl text-green-800 font-bold tracking-tight">
                Aspiring Web Developer
              </p>
              <p className="absolute inset-x-0 text-center transition-all duration-500 opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 text-xl md:text-2xl text-red-700 font-bold tracking-tight">
                University Athlete
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*RIGHT BOX*/}
      <div className="md:col-span-8 mt-32 md:mt-0">
        <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 h-full">
          <h2 className="text-3xl font-bold mb-4 text-green-800">Profile 🍅</h2>
          <p className="leading-relaxed text-stone-900 text-justify text-lg">
            A persevering and dedicated computer science student and university athlete with a strong drive for continuous learning and excellence. Demonstrates discipline, resilience, and reliability through balancing national-level athletic training with academic, project, and internship commitments. Particularly interested in UI/UX design, front-end development, and data-driven systems, with a focus on building accessible, user-centered interfaces and working with structured datasets and databases, while also having hands-on experience with back-end development and API integration.
          </p>
          
          <div className="flex flex-col gap-8 mt-8">
            <div>
              <h3 className="font-bold text-stone-900 border-l-4 border-green-600 text-xl pl-3 mb-2">Hobbies & Interests</h3>
              <p className="text-stone-900 text-lg">
                Sketching • Animation • Graphic Design • Fitness • Reading • Sewing • Gardening
              </p>
            </div>

            <div>
              <h3 className="font-bold text-stone-900 border-l-4 border-green-600 text-xl pl-3 mb-2">Professional Strengths</h3>
              <p className="text-stone-900 text-lg leading-relaxed">
                Data-driven planning & prioritization • Deadline-driven time management • 
                User-centered UI/UX design • Analytical problem-solving • Cross-functional 
                team collaboration
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSection;