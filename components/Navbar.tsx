"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiBasketballLight } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";

import SidebarList from "./SidebarList";
import ToggleTheme from "./ToggleTheme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="relative flex items-end justify-start flex-shrink-0 bg-primary px-5 py-5 h-52 rounded-lg">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="text-4xl text-text absolute top-4 left-5 transition rotate-180 z-20 hover:text-text/50 sm:hidden"
        >
          {isMenuOpen ? <IoMdClose /> : <TbMenuDeep />}
        </button>
        <Link href="/">
          <div className="flex items-center justify-start">
            <PiBasketballLight className="text-5xl text-white -rotate-45" />
            <p className="text-4xl font-lusitana text-white">Turniri</p>
          </div>
        </Link>
        <ToggleTheme />
      </nav>
      {isMenuOpen && (
        <SidebarList
          isLoggedIn={isLoggedIn}
          username={session?.user.username}
          isNav={true}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
};

export default Navbar;
