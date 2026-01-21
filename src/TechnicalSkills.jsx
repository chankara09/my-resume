import React from "react";

import Altair from "./assets/logos/Altair.jpg"; 
import Angular from "./assets/logos/Angular.jpg"; 
import C from "./assets/logos/C.jpg"; 
import C1 from "./assets/logos/C++.jpg"; 
import Figma from "./assets/logos/Figma.jpg"; 
import Github from "./assets/logos/GitHub.jpg"; 
import HTML from "./assets/logos/HTML.jpg"; 
import Javascript from "./assets/logos/javascript.jpg"; 
import Jira from "./assets/logos/Jira.jpg"; 
import Nodejs from "./assets/logos/Nodejs.jpg"; 
import Python from "./assets/logos/Python.jpg"; 
import React1 from "./assets/logos/React.jpg"; 
import SQL from "./assets/logos/SQL.jpg"; 
import MYSQL from "./assets/logos/MYSQL.jpg"; 
import Tailwind from "./assets/logos/Tailwind.jpg"; 
import VS2022 from "./assets/logos/VS2022.jpg"; 
import VSCode from "./assets/logos/VSCode.jpg"; 
import Azure from "./assets/logos/Azure.jpg"; 


const SkillPill = ({ name, icon }) => (
  <div className="flex items-center gap-3 bg-white/50 p-3 px-5 rounded-2xl border border-green-100 hover:border-green-400 hover:bg-green-50 transition-all duration-300 shadow-sm hover:shadow-md group">
    {/*LOGO CONTAINER*/}
    <div className="w-8 h-8 flex items-center justify-center">
      {icon ? (
        <img src={icon} alt={name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
      ) : (
        <div className="w-full h-full bg-green-200 rounded-lg animate-pulse" /> 
      )}
    </div>
    <span className="font-semibold text-stone-700">{name}</span>
  </div>
);

const TechnicalSkills = () => {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: Python }, 
        { name: "Javascript", icon: Javascript },
        { name: "C", icon: C },
        { name: "C++", icon: C1 },
        { name: "SQL", icon: SQL },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: React1 },
        { name: "Nodejs", icon: Nodejs },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "Angular", icon: Angular },
        { name: "HTML", icon: HTML },
      ],
    },
    {
      title: "Tools & Systems",
      skills: [
        { name: "GitHub", icon: Github },
        { name: "Altair RapidMiner", icon: Altair },
        { name: "Figma", icon: Figma },
        { name: "VS Code", icon: VSCode },
        { name: "VS 2022", icon: VS2022 },
        { name: "Azure", icon: Azure },
        { name: "MYSQL", icon: MYSQL },
        { name: "Jira", icon: Jira },
      ],
    },
  ];

  return (
    <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-green-800">Technical Skill 🌱 </h2>

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.title}>
            {/*CATEGORY*/}
            <h3 className="font-bold text-stone-900 border-l-4 border-green-600 text-xl pl-3 mb-2 ">
              <span className=""></span>
              {cat.title}
            </h3>

            {/*SKILLS*/}
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill) => (
                <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;