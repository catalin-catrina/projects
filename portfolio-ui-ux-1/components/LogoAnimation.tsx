"use client";

import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import udemy from "@/assets/udemy.png";
import fiverr from "@/assets/fiverr.png";
import elementor from "@/assets/elementor.png";
import logitech from "@/assets/logitech.png";
import oracle from "@/assets/oracle.png";

const images = [
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "logitech" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "logitech" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "logitech" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "logitech" },
];

function LogoAnimation() {
  return (
    <div className="py-8 bg-purple-200/10 glass opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right, _transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {images.map((image, index) => (
              <Image key={index} src={image.src} height={30} alt={image.alt} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoAnimation;
