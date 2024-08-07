"use client";
import React from "react";
import { PiBasketballLight } from "react-icons/pi";

import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  return (
    <nav className="font-lusitana relative flex items-end justify-start flex-shrink-0 bg-primary px-5 py-5 h-52 rounded-lg">
      <div className="flex items-center justify-start">
        <PiBasketballLight className="text-5xl text-white -rotate-45" />
        <p className="text-4xl text-white">Turniri</p>
      </div>
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
