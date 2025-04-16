"use client";

import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import React, { useEffect } from "react";

const cursorVariants = {
  blink: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function Typewriter() {
  const baseText = "Hi there, I'm Catalin";

  const count = useMotionValue(0);

  const displayedText = useTransform(count, (latestCount) =>
    baseText.slice(0, Math.round(latestCount))
  );

  const showCursor = baseText.length !== displayedText.length

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
    });

    return () => controls.stop();
  });

  return (
    <div className="relative h-screen">
      <div className="flex justify-center items-center absolute inset-0 bg-linear-to-br from-slate-950 to-gray-950">
        <div className="absolute right-[10%] top-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="absolute left-[10%] bottom-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <motion.span className="text-5xl text-gray-300">
          {displayedText}
        </motion.span>
        <AnimatePresence>
         {} 
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Typewriter;
