import React from "react";
import * as z from "zod";

import { TournamentSchema } from "@/schemas";

interface ControlButtonsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  formData: z.infer<typeof TournamentSchema>;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof TournamentSchema>>
  >;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setSuccess: React.Dispatch<React.SetStateAction<string>>;
}

const ControlButtons = ({
  page,
  setPage,
  formData,
  setFormData,
  setError,
}: ControlButtonsProps) => {
  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (page === 1 && formData.tournamentType === 0) {
      setError("Izaberi format!");

      return;
    }

    if (page === 2 && !formData.bracketSize && formData.teams.length < 2) {
      setError("Unesi bar dva tima!");
      return;
    }

    if (page === 3 && formData.tournamentName === "") {
      setError("Unesi ime turnira!");
      return;
    }

    setError("");
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
        teams: [],
      });
    } else if (page === 4) {
      setFormData({
        ...formData,
        tournamentName: "",
      });
    }

    setError("");
    setPage(page - 1);
  };

  return (
    <article className="mb-8">
      {page > 1 && (
        <button
          className="bg-primary text-text text-xl italic font-medium px-4 py-2 mr-10 rounded-lg hover:bg-background"
          onClick={handlePrevClick}
        >
          Prethodno
        </button>
      )}
      {page < 3 ? (
        <button
          type="button"
          className={`bg-accent text-xl italic font-medium tracking-wider px-4 py-2 ${
            page === 1 && "ml-5"
          } rounded-lg hover:bg-primary`}
          onClick={handleNextClick}
        >
          Sledeće
        </button>
      ) : (
        <button
          type="submit"
          className="bg-accent text-xl italic font-medium tracking-wider px-4 py-2 rounded-lg hover:bg-primary"
        >
          Napravi
        </button>
      )}
    </article>
  );
};

export default ControlButtons;
