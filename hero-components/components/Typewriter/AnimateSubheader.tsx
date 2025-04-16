"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

function AnimateSubheader() {
  const baseText = "I'm Catalin";

  const count = useMotionValue(0);
  const displayedText = useTransform(count, (latest) =>
    baseText.slice(0, Math.round(latest))
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
    });

    return () => controls.stop();
  });

  return (
    <motion.h1 className="inline text-8xl text-gray-300">
      {displayedText}
    </motion.h1>
  );
}

export default AnimateSubheader;
