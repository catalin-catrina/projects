"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import hamburgerIcon from "@/assets/hamburger.svg";
import closeIcon from "@/assets/close.svg";

const NAV_ITEMS = [
  { id: 0, title: "About", path: "#about" },
  { id: 1, title: "Portfolio", path: "#portfolio" },
  { id: 2, title: "Experience", path: "#experience" },
  { id: 3, title: "Technologies", path: "#technologies" },
];

export const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="max-w-[1200px] lg:mx-auto px-4 md:px-8 text-gray-300">
      <motion.nav
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="px-4 lg:px-0 py-10 border border-gray-700 rounded-3xl my-10 text-xl"
      >
        <div className="flex justify-between items-center px-5">
          <h3 className="text-2xl text-gray-300">Catalin Catrina</h3>
          <ul className="hidden lg:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="text-2xl">
                <Link href={item.path} onClick={() => setMobileNavOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <Image
            src={mobileNavOpen ? closeIcon : hamburgerIcon}
            onClick={() =>
              setMobileNavOpen((prevIsMobileNavOpen) => !prevIsMobileNavOpen)
            }
            width={40}
            height={40}
            className="lg:hidden relative z-20
             inline-block"
            alt="Hamburger navigation icon"
          />

          <AnimatePresence>
            {mobileNavOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center text-center bg-black z-10"
              >
                <ul className="flex flex-col gap-10">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.id} className="text-5xl">
                      <Link
                        href={item.path}
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};
