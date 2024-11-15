"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiBasketballLight } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";

import SidebarList from "./SidebarList";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-lusitana relative flex items-end justify-start flex-shrink-0 bg-primary px-5 py-5 h-52 rounded-lg">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="text-4xl text-text absolute top-4 left-5 transition rotate-180 hover:text-text/50 sm:hidden"
      >
        <TbMenuDeep />
      </button>
      <Link href="/">
        <div className="flex items-center justify-start">
          <PiBasketballLight className="text-5xl text-white -rotate-45" />
          <p className="text-4xl text-white">Turniri</p>
        </div>
      </Link>
      <ToggleTheme />
      {/* HIDDEN */}
      {isMenuOpen && <SidebarList isLoggedIn={false} username="" />}
    </nav>
  );
};

export default Navbar;
