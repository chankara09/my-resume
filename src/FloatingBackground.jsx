import React from "react";
import tomatoImg from "./assets/tomato.png"; 

const FloatingBackground = () => {
  const images = [tomatoImg, tomatoImg, tomatoImg, tomatoImg];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <img
        src={images[0]}
        alt=""
        className="absolute top-[-5%] left-[-5%] w-64 h-64 object-contain opacity-50 blur-sm animate-drift"
      />
      <img
        src={images[1]}
        alt=""
        className="absolute bottom-[10%] right-[-5%] w-48 h-48 object-contain opacity-50 blur-md animate-drift [animation-delay:2s]"
      />
      <img
        src={images[2]}
        alt=""
        className="absolute bottom-[-5%] left-[20%] w-72 h-72 object-contain opacity-50 blur-sm animate-drift [animation-delay:4s]"
      />
      <img
        src={images[3]}
        alt=""
        className="absolute top-[-5%] right-[20%] w-100 h-100 object-contain opacity-50 blur-sm animate-drift [animation-delay:6s]"
      />
    </div>
  );
};

export default FloatingBackground;