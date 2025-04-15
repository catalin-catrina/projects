"use client";

import { motion } from "motion/react";
import React from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
    },
  },
};

const headerVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const letterVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const cursorVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

function Typewriter() {
  const text1 = "Hi there,";
  const text2 = "I'm Catalin";
  const letters1 = text1.split("");
  const letters2 = text2.split("");

  return (
    <div className="relative h-screen">
      <div className="flex justify-center items-center absolute inset-0 bg-linear-to-br from-slate-950 to-gray-950">
        <div className="absolute right-[10%] top-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <div className="absolute left-[10%] bottom-[10%] w-[15vw] h-[15vw] bg-gray-500 rounded-full blur-2xl blend-mode-overlay animate-typewriter-overlay"></div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center flex-col gap-10"
        >
          <motion.h2
            variants={headerVariants}
            className="text-5xl text-gray-300"
          >
            {letters1.map((letter, index) => (
              
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
                <motion.span
                  key={index}
                  variants={cursorVariants}
                  className="cursor"
                ></motion.span>
             
            ))}
          </motion.h2>
          <motion.h1
            variants={headerVariants}
            className="text-8xl text-gray-300"
          >
            {letters2.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Typewriter;
