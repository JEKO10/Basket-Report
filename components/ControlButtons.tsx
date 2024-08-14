import axios from "axios";
import Link from "next/link";
import React from "react";

interface ControlButtonsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  formData: {
    tournamentType: number;
    bracketSize: boolean;
    tournamentName: string;
    participants: number;
    teams: string;
    thirdPlace: boolean;
    randomize: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      tournamentType: number;
      bracketSize: boolean;
      tournamentName: string;
      participants: number;
      teams: string;
      thirdPlace: boolean;
      randomize: boolean;
    }>
  >;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ControlButtons = ({
  page,
  setPage,
  formData,
  setFormData,
  setMessage,
}: ControlButtonsProps) => {
  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/tournament", formData);

      if (response.data.success) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Submission failed, please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred, please try again.");
    }
  };

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

    if (page === 3) {
      handleSubmit();
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
  );
};

export default ControlButtons;
