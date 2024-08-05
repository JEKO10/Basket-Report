"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <button onClick={() => setTheme(`${dark ? "light" : "dark"}`)}>
        Toggle
      </button>
    </div>
  );
};

export default ToggleTheme;
