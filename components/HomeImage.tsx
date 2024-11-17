"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import homeImg from "@/public/homePage.jpg";
import homeDarkImg from "@/public/homePageDark.png";

const HomeImage = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Image
      src={theme === "light" ? homeImg : homeDarkImg}
      alt="homeImg"
      height={525}
      width={800}
      className="mt-5 sm:mt-10 w-full lg:w-3/5 h-auto rounded-md"
    />
  );
};

export default HomeImage;
