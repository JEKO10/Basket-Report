"use client";

import Link from "next/link";
import React, { useState } from "react";

import BracketSize from "@/components/BracketSize";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";

const NewPage = () => {
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    tournamentType: 0,
    bracketSize: false,
    tournamentName: "",
    participants: 2,
    teams: "",
    thirdPlace: false,
  });

  const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (page === 1 && formData.tournamentType === 0) {
      setMessage("Izaberi format!");

      return;
    }

    if (page === 2 && !formData.bracketSize && !formData.teams.includes("\n")) {
      setMessage("Unesi bar dva tima!");
      return;
    }

    if (page === 3 && formData.tournamentName === "") {
      setMessage("Unesi ime turnira!");
      return;
    }

    setPage(page + 1);
  };

  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (page === 2) {
      setFormData({
        ...formData,
        tournamentType: 0,
      });
    } else if (page === 3) {
      setFormData({
        ...formData,
        bracketSize: false,
        thirdPlace: false,
        participants: 2,
        teams: "",
      });
    } else if (page === 4) {
      setFormData({
        ...formData,
        tournamentName: "",
      });
    }

    setPage(page - 1);
  };

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
      {message}
      <article className="mb-8">
        {page > 1 && (
          <button
            className="bg-primary text-text text-xl italic font-medium px-4 py-2 mr-10 rounded-lg hover:bg-background"
            onClick={handlePrevClick}
          >
            Prethodno
          </button>
        )}
        <Link
          href={page === 3 ? "/profile" : "#"}
          className={`bg-accent text-xl italic font-medium tracking-wider px-4 py-2 ${
            page === 1 && "ml-5"
          } rounded-lg hover:bg-primary`}
          onClick={handleNextClick}
        >
          {page === 3 ? "Napravi" : "Sledeće"}
        </Link>
      </article>
    </div>
  );
};

export default NewPage;
