"use client";

import Link from "next/link";
import React, { useState } from "react";

import BracketSize from "@/components/BracketSize";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";

const NewPage = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    tournamentType: 0,
    bracketSize: false,
    tournamentName: "",
    participants: 2,
    teams: "",
    thirdPlace: false,
  });

  // const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (page !== 3) {
  //     event.preventDefault();
  //     setPage(page + 1);
  //   }
  // };

  return (
    <div>
      <Navbar />
      {page === 1 && (
        <TournamentForm formData={formData} setFormData={setFormData} />
      )}
      {page === 2 && (
        <BracketSize formData={formData} setFormData={setFormData} />
      )}
      {page === 3 && <Name formData={formData} setFormData={setFormData} />}
      <article className="mb-8">
        {page > 1 && (
          <button
            className="bg-primary text-text text-xl italic font-medium px-4 py-2 mr-10 rounded-lg hover:bg-background"
            onClick={() => setPage(page - 1)}
          >
            Prethodno
          </button>
        )}
        <Link
          href={"#"}
          // href={page === 3 ? "/profile" : "#"}
          className={`bg-accent text-xl italic font-medium tracking-wider px-4 py-2 ${
            page === 1 && "ml-5"
          } rounded-lg hover:bg-primary`}
          onClick={() => {
            // handleNextClick(e);
            setPage(page + 1);
            console.log(formData);
          }}
        >
          {page === 3 ? "Napravi" : "Sledeće"}
        </Link>
      </article>
    </div>
  );
};

export default NewPage;
