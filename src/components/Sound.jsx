"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFirstUserInteraction = () => {
    const playConsent = localStorage.getItem("playConsent");
    if (playConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  };

  useEffect(() => {
    const consent = localStorage.getItem("playConsent");

    if (consent) {
      setIsPlaying(consent === "true");

      if (consent === "true") {
        ["click", "keydown", "touchstart"].forEach((event) =>
          document.addEventListener(event, handleFirstUserInteraction)
        );
      }
    } else {
      console.log("howdy");
    }
  }, []);

  const toggle = () => {
    const newState = !isPlaying;
    setIsPlaying(!isPlaying);
    newState ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("playConsent", String(!isPlaying));
  };

  return (<div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
    <audio ref={audioRef} loop>
      <source src={"/audio/birdsong.mp3"} type="audio/mpeg" />
      Your web browser does not support audio.
    </audio>
    <motion.button
      onClick={toggle}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}

      className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4 custom-bg-alt"
      aria-label={"home"}
      name={"home"}
    >
      {
        isPlaying ?
          <Volume2 className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
          :
          <VolumeX className="w-full h-full text-foreground group-hover:text-accent" strokeWidth={1.5} />
      }
    </motion.button>
  </div>);
}

export default Sound;
