import React from "react";

import HomeImage from "@/components/HomeImage";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <article className="flex justify-between">
        <Sidebar />
        <article className="flex flex-col justify-center items-center flex-1 lg:flex-row lg:justify-between md:items-start sm:justify-start px-2 sm:px-5 md:px-10 lg:px-5">
          <div className="flex-grow my-5 sm:my-0 sm:flex-initial lg:pr-5 lg:my-5">
            <h1 className="font-lusitana text-4xl mt-5 mb-1">Turniri</h1>
            <p className="text-secondary md:text-lg italic lg:max-w-xs">
              Kreiraj, takmiči se, pobedi! Napravi svoj savršeni turnir brzo i
              lako.
            </p>
          </div>
          <HomeImage />
        </article>
      </article>
    </section>
  );
};

export default HomePage;
