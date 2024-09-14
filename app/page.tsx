import React from "react";

import HomeImage from "@/components/HomeImage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow p-3 px-10">
          <h1 className="font-lusitana text-4xl mt-5 mb-1">Turniri</h1>
          <p className="text-secondary text-lg italic max-w-xs">
            Kreiraj, takmiči se, pobedi! Napravi svoj savršeni turnir brzo i
            lako.
          </p>
        </div>
      </div>
      <HomeImage />
    </div>
  );
};

export default HomePage;
