"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";
import AnimateSubheader from "./AnimateSubheader";
import Cursor from "./Cursor";

function Typewriter() {
  const [animationEnded, setAnimationEnded] = useState(false);

  const textArray = ["Hi there, "];

  const count = useMotionValue(0);

  const displayedText = useTransform(count, (latestCount) =>
    baseText.slice(0, Math.round(latestCount))
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
      onComplete: () => {
        setAnimationEnded(true);
      },
    });

    return () => controls.stop();
  });

  return (
    <div className="relative h-screen">
      <div className="flex justify-center items-center absolute inset-0 bg-linear-to-br from-slate-950 to-gray-950">
        <div className="absolute right-[10%] top-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="absolute left-[10%] bottom-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="text-center">
          <motion.h1 className="inline text-6xl text-gray-300">
            {displayedText}
          </motion.h1>
          {animationEnded && (
            <>
              <br />
              <br />
              <AnimateSubheader />
            </>
          )}
          <Cursor />
        </div>
      </div>
    </div>
  );
}

export default Typewriter;
