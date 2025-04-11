"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect } from "react";

const COLORS = [""];

export const Hero = () => {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 0% 50%, #000 60%, red`;

  useEffect(() => {
    const controls = animate(color, COLORS, {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.section style={{ backgroundImage }} className="h-screen relative">
      mere
    </motion.section>
  );
};
