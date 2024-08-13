"use client";

import React, { useEffect, useState } from "react";

import BracketSize from "@/components/BracketSize";
import ControlButtons from "@/components/ControlButtons";
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
    randomize: false,
  });

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

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
      <div className={`my-5 ${page === 1 && "ml-6"} h-6`}>
        <p className="text-xl text-red-600 italic font-medium">{message}</p>
      </div>
      <ControlButtons
        page={page}
        setPage={setPage}
        formData={formData}
        setFormData={setFormData}
        setMessage={setMessage}
      />
    </div>
  );
};

export default NewPage;
