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
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  isPending: boolean;
}

const ControlButtons = ({
  page,
  setPage,
  formData,
  setFormData,
  setMessage,
  isPending,
}: ControlButtonsProps) => {
  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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

    setMessage("");
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

    setMessage("");
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
          disabled={isPending}
        >
          Sledeće
        </button>
      ) : (
        <button
          type="submit"
          className="bg-accent text-xl italic font-medium tracking-wider px-4 py-2 ml-5 rounded-lg hover:bg-primary"
          disabled={isPending}
        >
          Napravi
        </button>
      )}
    </article>
  );
};

export default ControlButtons;
