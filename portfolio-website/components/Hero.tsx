"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect } from "react";

const COLORS = [
  "hsl(258 80% 34%)",
  "hsl(266 80% 34%)",
  "hsl(236 80% 34%)",
  "hsl(219 80% 34%)",
];

export const Hero = () => {
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 0% 40%, #000 50%, ${color}`;

  useEffect(() => {
    const controls = animate(color, COLORS, {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "mirror",
    });

    return () => controls.stop();
  }, []);

  return (
    <motion.section
      style={{ backgroundImage }}
      className="h-screen relative z-0 overflow-hidden"
    >
      <motion.div
        className="absolute z-0 top-[-300px] right-[-200px] w-[800px] h-[300px] rounded-full origin-top-right bg-linear-to-l from-purple-800 to-blue-800"
        // initial={{ rotate: 0 }}
        // animate={{ rotate: -90 }}
        // transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* <div className="absolute z-0 bottom-[-300px] left-[-200px] w-[800px] h-[300px] overflow-visible">
        <motion.div
          className="w-full h-full origin-bottom-right rounded-full bg-linear-to-r from-purple-800 to-blue-800"
          initial={{ rotate: 90 }}
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div> */}

      <div className="absolute z-0 bottom-0 left-[-10vw] w-[800px] h-[300px] overflow-visible">
        <motion.div
          className="w-full h-full rounded-full origin-bottom-left bg-linear-to-r from-purple-800 to-blue-800"
          // Now start at 0 so the element is "sitting up"
          initial={{ rotate: 180 }}
          // Animate to 90 (or 90 deg change)
          animate={{ rotate: 90 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
    </motion.section>
  );
};
