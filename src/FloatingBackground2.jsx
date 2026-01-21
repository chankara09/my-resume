import React from "react";
import CutePicLeft from "./assets/cuteleft.png"; 
import CutePicRight from "./assets/cuteright.png"; 
import CutePicRight2 from "./assets/cuteright2.png";

const FloatingBackground2 = () => {
  return (
    <>
      <div className="hidden xl:block fixed top-1/2 -left-12 w-96 h-96 pointer-events-none opacity-40 -z-10 transform -translate-y-1/2">
        <img 
          src={CutePicLeft} 
          alt="" 
          className="w-full h-full object-contain -rotate-12 animate-drift-reverse" 
        />
      </div>
      <div className="hidden xl:block fixed top-1/4 right-0 w-64 h-64 pointer-events-none opacity-30 -z-10 transform -translate-y-1/2">
        <img 
          src={CutePicRight} 
          alt="" 
          className="w-full h-full object-contain rotate-6 animate-drift-reverse [animation-delay:3s]" 
        />
      </div>
      <div className="hidden xl:block fixed bottom-[-10%] -right-10 w-96 h-96 pointer-events-none opacity-40 -z-10">
        <img 
          src={CutePicRight2} 
          alt="" 
          className="w-full h-full object-contain rotate-12 animate-drift-reverse [animation-delay:6s]" 
        />
      </div>
    </>
  );
};

export default FloatingBackground2;