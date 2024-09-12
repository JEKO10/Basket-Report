import React from "react";

import HomeImage from "@/components/HomeImage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HomeImage />
    </div>
  );
};

export default HomePage;
