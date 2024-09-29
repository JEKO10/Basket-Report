"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { PiSunLight } from "react-icons/pi";
import { PiMoonLight } from "react-icons/pi";

const ToggleTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <button
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
      className="text-4xl text-text absolute top-4 right-6 hover:text-background"
    >
      {dark ? (
        <PiMoonLight strokeWidth={10} />
      ) : (
        <PiSunLight strokeWidth={10} />
      )}
    </button>
  );
};

export default ToggleTheme;
