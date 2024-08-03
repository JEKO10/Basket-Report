"use client";
import { Lusitana } from "next/font/google";
import React, { useEffect, useState } from "react";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { MdOutlineSportsVolleyball } from "react-icons/md";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [isBasketball, setIsBasketball] = useState(true);

  useEffect(() => {
    let interval = setInterval(() => {
      setIsBasketball(!isBasketball);
    }, 2000);

    return () => clearInterval(interval);
  }, [isBasketball]);

  return (
    <nav
      className={`${lusitana.className} flex items-end justify-start bg-primary px-5 py-5 h-52 rounded-lg`}
    >
      <div className="flex items-center justify-start">
        {isBasketball ? (
          <MdOutlineSportsBasketball className="text-4xl text-text mr-1 -rotate-45" />
        ) : (
          <MdOutlineSportsVolleyball className="text-4xl text-text mr-1 -rotate-45" />
        )}
        <p className="text-4xl text-text">Turniri</p>
      </div>
    </nav>
  );
};

export default Navbar;
