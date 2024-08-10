"use client";

import React, { useState } from "react";

import BracketSize from "@/components/BracketSize";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";

const NewPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <Navbar />
      {page === 1 ? (
        <TournamentForm />
      ) : page === 2 ? (
        <BracketSize />
      ) : (
        <Name />
      )}
      <article className="mb-8">
        {page > 1 && (
          <button
            className="bg-primary text-text text-xl italic font-medium px-4 py-2 mr-10 rounded-lg hover:bg-background"
            onClick={() => setPage(page - 1)}
          >
            Prethodno
          </button>
        )}
        <button
          className={`bg-accent text-xl italic font-medium tracking-wider px-4 py-2 ${page === 1 && "ml-5"} rounded-lg hover:bg-primary`}
          onClick={() => setPage(page + 1)}
        >
          {page === 3 ? "Napravi" : "Sledeće"}
        </button>
      </article>
    </div>
  );
};

export default NewPage;
