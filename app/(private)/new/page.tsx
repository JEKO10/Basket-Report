"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import { createTournament } from "@/actions/tournaments";

import BracketSize from "./components/BracketSize";
import ControlButtons from "./components/ControlButtons";
import Name from "./components/Name";
import TournamentForm from "./components/TournamentForm";

const NewPage = () => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
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
  const { data } = useSession();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = data?.user.id;

    if (formData.tournamentName === "") {
      setError("Unesi ime turnira!");
      return;
    } else if (formData.tournamentName.length < 3) {
      setError("Ime mora sadržati bar tri slova!");
      return;
    }

    try {
      createTournament(formData, userId).then((data) => {
        if (data.success) {
          setSuccess(data.success);
          router.push("/profile");
        } else {
          setError(data.error);
        }
      });
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
