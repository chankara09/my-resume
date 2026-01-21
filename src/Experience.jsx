import React from "react";

const ExperienceItem = ({ title, organization, duration, description, index }) => {
  //ALTERNATE COLORS BASED ON INDEX
  const isEven = index % 2 === 0;
  
  const accentColor = isEven ? "border-green-500 hover:bg-green-500" : "border-red-600 hover:bg-red-600";
  const textColor = isEven ? "text-green-700" : "text-red-700";
  const timelineBorder = isEven ? "hover:border-green-500" : "hover:border-red-600";
  const dotBorder = isEven ? "border-green-500" : "border-red-700";

  return (
    <div className={`relative pl-8 border-l-2 border-stone-200 transition-colors duration-300 group ${timelineBorder}`}>
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 transition-all duration-300 ${accentColor} ${dotBorder}`}></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-2xl font-black text-stone-900 tracking-tight">{title}</h3>
          <p className={`text-lg font-bold ${textColor}`}>{organization}</p>
        </div>
        <p className="text-sm font-black text-black uppercase tracking-widest bg-stone-100 px-3 py-1 rounded-lg">
          {duration}
        </p>
      </div>
      
      <p className="text-stone-600 leading-relaxed text-lg max-w-4xl">
        {description}
      </p>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Undergraduate Thesis Member",
      organization: "De La Salle University - Computer Studies Dept. CELT Lab",
      duration: "May 2025 — Present",
      description: "Developing a continuous Filipino Sign Language (FSL) video dataset from news broadcasts with temporally aligned subtitles to advance FSL processing and accessible media. Implemented a semi-supervised framework combining subtitle alignment, I3D-based video modeling, automated cleaning of misalignments, and human-in-the-loop validation, ensuring high-quality, accurate, and reliable dataset generation for research and application development."
    },
    {
      title: "Web Developer Intern",
      organization: "Wireless Link Technologies",
      duration: "August 2024 — October 2024",
      description: "Contributed to the development and maintenance of Angular-based web applications, enhancing user experience and improving application responsiveness. Managed Microsoft SQL Server databases to ensure data integrity and support seamless functionality. Utilized Azure DevOps to streamline task management and team collaboration, accelerating project delivery. Assisted in debugging and performance optimization, reducing system errors and improving overall application efficiency."
    },
    {
      title: "Product Owner & Designer",
      organization: "De La Salle University - Academic Projects",
      duration: "May 2024 — December 2024",
      description: "Managed a team of four to Managed two web development projects (a Reservation System and a Contacting System) enhancing client communication and ensuring requirements were met throughout the development lifecycle. Proposed and implemented efficient design solutions using Figma, improving usability and overall project efficiency. Leveraged Jira to track tasks, coordinate team workflows, and streamline project delivery. Produced and maintained comprehensive documentation, supporting project continuity and effective client interactions."
    }
  ];

  return (
    <section className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/20 my-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold mb-4 text-green-800">
          Experience & Academic Activities 🍎
        </h2>
        <div className="hidden md:block w-32 h-1 bg-gradient-to-r from-green-500 to-red-500 rounded-full opacity-30"></div>
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} index={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;