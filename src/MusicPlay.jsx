import React, { useState, useRef, useEffect} from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import Matcha from "./assets/Chillpeach_Matcha.mp3"; 

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.40; 
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 group">
      <audio ref={audioRef} src={Matcha} loop />
      <div className="opacity-0 translate-x-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
        <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-1">
            Background Music
          </p>
          <p className="text-xs font-bold leading-tight">
            {isPlaying ? "Now Playing" : "Music Paused"}
          </p>
        </div>
      </div>

      <button
        onClick={toggleMusic}
        className={`relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-2xl border border-white/50 backdrop-blur-xl transition-all duration-500 hover:scale-110 active:scale-95 
        ${isPlaying 
          ? "bg-red-700 text-white animate-pulse" 
          : "bg-white/80 text-stone-900 hover:bg-white"
        }`}
      >

        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-10 [animation-delay:0.5s]"></span>
          </>
        )}

        {isPlaying ? (
          <Volume2 size={28} strokeWidth={2.5} />
        ) : (
          <VolumeX size={28} strokeWidth={2.5} />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;