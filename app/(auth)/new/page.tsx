"use client";

import React from "react";

import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";

const NewPage = () => {
  return (
    <div>
      <Navbar />
      <TournamentForm />
      <article className="mb-8">
        <button className="bg-primary text-text text-xl italic font-medium px-4 py-2 mr-10 rounded-lg hover:bg-background">
          Prethodno
        </button>
        <button className="bg-accent text-xl italic font-medium tracking-wider px-4 py-2 mr-10 rounded-lg hover:bg-primary">
          Sledeće
        </button>
      </article>
    </div>
  );
};

export default NewPage;
