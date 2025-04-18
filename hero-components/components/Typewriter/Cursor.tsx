"use client";

import { motion } from "motion/react";
import React from "react";

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

function Cursor() {
  return (
    <motion.span
      variants={cursorVariants}
      animate="blink"
      className="inline-block h-14 w-2 bg-gray-300 ml-2"
    ></motion.span>
  );
}

export default Cursor;
