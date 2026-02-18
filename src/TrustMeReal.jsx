import React from "react";
import Cert1 from "./assets/AWS.png"; 
import Cert2 from "./assets/WLT.png";
import Cert3 from "./assets/Simplilearn.png"; 


const CertificationCard = ({ title, issuer, date, image }) => (
  <div className="group relative bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="flex items-start gap-6">
      <div className="w-20 h-20 flex-shrink-0 bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-green-600 font-bold text-2xl">✓</div>
        )}
      </div>
      <div>
        <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-1 rounded-md">Verified Certificate</span>
        <h3 className="text-xl font-black text-stone-900 mt-2 leading-tight">{title}</h3>
        <p className="text-sm text-stone-500 font-bold mt-1">{issuer} • {date}</p>
      </div>
    </div>
    
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/10 to-transparent rounded-tr-3xl -z-10"></div>
  </div>
);

const ReferenceCard = ({ name, role, company, contact, initial }) => (
  <div className="bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-white/20 shadow-sm hover:bg-white/60 transition-colors group">
    <div className="flex items-center gap-4 mb-4">
      {/*PROFILE CIRCLE*/}
      <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-white font-black text-xl group-hover:bg-green-600 transition-colors">
        {initial}
      </div>
      <div>
        <h4 className="font-bold text-stone-900 leading-none">{name}</h4>
        <p className="text-xs text-stone-500 font-bold uppercase tracking-wider mt-1">{role}</p>
      </div>
    </div>
    <div className="pt-4 border-t border-stone-100">
      <p className="text-sm font-bold text-stone-800">{company}</p>
      <a href={`mailto:${contact}`} className="text-xs text-blue-600 font-semibold hover:underline mt-1 block">
        {contact}
      </a>
    </div>
  </div>
);

const TrustSection = () => {
  return (
    <section className="my-20 space-y-20">
      {/*CERTIFICATIONS SUB-SECTION*/}
      <div>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tighter whitespace-nowrap">
            Certifications 🍓
          </h2>
          
          <div className="hidden md:block h-px flex-grow bg-stone-200"></div>

          <a 
            href="https://drive.google.com/drive/folders/1T9igFVmPmvxR5f4XkHZiuWI_u75lU7gv?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-5 bg-green-700 text-white rounded-[2rem] text-xl font-black hover:bg-green-800 transition-all shadow-2xl hover:scale-105 active:scale-95 text-center whitespace-nowrap"
          >
            Access Certificate Folder
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificationCard 
            title="Certification of Completion of Voluntary Internship" 
            issuer="Wireless Link Technologies" 
            date="2024" 
            image={Cert2} 
          />
          <CertificationCard 
            title="AWS Academy Graduate Cloud Foundations" 
            issuer="Amazon Web Services Academy | Credly" 
            date="2025" 
            image={Cert1} 
          />
          <CertificationCard 
            title="Simplilearn Certified PowerBI for Beginners" 
            issuer="Simplilearn & Microsoft | Simplilearn" 
            date="2026" 
            image={Cert3} 
          />
        </div>
      </div>

      {/*REFERENCES SUB-SECTION*/}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tighter">Character References 🪲</h2>
          <div className="h-px flex-grow bg-stone-200"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReferenceCard 
            name="Coach Jeoffrey Chua" 
            role="Head University Coach | Philippine National Team Coach" 
            company="De La Salle University Manila SDFO | PATAFA" 
            contact="jeoffrey.chua@dlsu.edu.ph" 
            initial="J"
          />
          <ReferenceCard 
            name="Prof. Roger Luis Uy" 
            role="Professional Lecturer" 
            company="De La Salle University Manila - Department of Computer Technology" 
            contact="roger.uy@dlsu.edu.ph" 
            initial="R"
          />
          <ReferenceCard 
            name="Prof. Joanna Pauline Rivera" 
            role="Assistant Professor | Thesis Adviser" 
            company="De La Salle University Manila - Department of Software Technology" 
            contact="joanna.rivera@dlsu.edu" 
            initial="JP"
          />
        </div>
      </div>

    </section>
  );
};

export default TrustSection;