"use client";

import { motion } from "motion/react";

const NAV_ITEMS = [
  { id: 0, title: "Lorem ipsum" },
  { id: 1, title: "Lorem ipsum" },
  { id: 2, title: "Lorem ipsum" },
  { id: 3, title: "Lorem ipsum" },
];

export const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="container mx-auto py-10 text-xl"
    >
      <ul className="flex justify-end gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="
          ">
            {item.title}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
