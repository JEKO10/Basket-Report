"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import BracketSize from "@/components/BracketSize";
import ControlButtons from "@/components/ControlButtons";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import TournamentForm from "@/components/TournamentForm";

const NewPage = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    tournamentType: 0,
    bracketSize: false,
    tournamentName: "",
    participants: 2,
    teams: [] as string[],
    thirdPlace: false,
    randomize: false,
  });
  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/tournament", formData);

      if (response.data.success) {
        setSuccess("Uspješno napravljen turnir!");
        router.push("/profile");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError("Došlo je do greške, pokušajte ponovo.");
    }
  };

  useEffect(() => {
    if (error || success) {
      const timeout = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [error, success]);

  return (
    <form onSubmit={onSubmit}>
      <Navbar />
      {page === 1 && (
        <TournamentForm formData={formData} setFormData={setFormData} />
      )}
      {page === 2 && (
        <BracketSize formData={formData} setFormData={setFormData} />
      )}
      {page === 3 && (
        <div>
          <Name formData={formData} setFormData={setFormData} />
        </div>
      )}
      <div className={`my-5 ${page === 1 && "ml-6"} h-6`}>
        {error ? (
          <p className="text-xl text-red-600 italic font-medium">{error}</p>
        ) : success ? (
          <p className="text-xl text-green-600 italic font-medium">{success}</p>
        ) : null}
      </div>
      <ControlButtons
        page={page}
        setPage={setPage}
        formData={formData}
        setFormData={setFormData}
        setError={setError}
        setSuccess={setSuccess}
      />
    </form>
  );
};

export default NewPage;
