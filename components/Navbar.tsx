"use client";
import { Lusitana } from "next/font/google";
import React from "react";
import { PiBasketballLight } from "react-icons/pi";

import ToggleTheme from "./ToggleTheme";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  return (
    <nav
      className={`${lusitana.className} relative top-0 left-0 flex items-end justify-start bg-primary px-5 py-5 h-52 rounded-lg`}
    >
      <div className="flex items-center justify-start">
        <PiBasketballLight className="text-5xl text-accent -rotate-45" />
        <p className="text-4xl text-accent">Turniri</p>
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
