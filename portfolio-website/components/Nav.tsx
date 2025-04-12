"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import hamburgerIcon from "@/assets/hamburger.svg";
import closeIcon from "@/assets/close.svg";

const NAV_ITEMS = [
  { id: 0, title: "Lorem ipsum", path: "#lorem" },
  { id: 1, title: "Lorem ipsum", path: "#lorem" },
  { id: 2, title: "Lorem ipsum", path: "#lorem" },
  { id: 3, title: "Lorem ipsum", path: "#lorem" },
];

export const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="fixed z-1 w-full">
      <motion.nav
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full max-w-[1200px] mx-auto py-10 px-4 lg:px-0 text-xl"
      >
        <div className="text-right">
          <ul className="hidden md:flex justify-end gap-8">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className="
          "
              >
                {item.title}
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
            className="md:hidden relative z-2
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
                className="fixed top-0 left-0 w-full h-full flex justify-center bg-black/60"
              >
                <ul className="flex flex-col gap-10 mt-[20vh]">
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
