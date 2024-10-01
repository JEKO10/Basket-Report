"use client";

import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";

import BracketField from "./BracketField";
import ScoreModal from "./ScoreModal";

const BracketRound = ({
  match,
  teams,
  roundIndex,
}: {
  match: number[];
  teams?: string[];
  roundIndex: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState<{
    teamA: number | null;
    teamB: number | null;
  }>({
    teamA: 0,
    teamB: 0,
  });

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section className="w-fit mb-5 relative">
      {teams && roundIndex === 0 ? (
        <>
          <BracketField match={match[0]} teamName={teams[match[0] - 1]} />
          <BracketField match={match[1]} teamName={teams[match[1] - 1]} />
        </>
      ) : (
        <>
          <BracketField match={roundIndex === 0 ? match[0] : null} />
          <BracketField match={roundIndex === 0 ? match[1] : null} />
        </>
      )}
      {roundIndex === 0 && score.teamA === 0 && score.teamB === 0 ? (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex justify-center items-center bg-[#6EABDA] text-white h-full absolute top-0 right-0 px-1 transition-colors cursor-pointer hover:text-black"
        >
          <TbEdit className="text-2xl" title="Dodaj rezultat" />
        </div>
      ) : (
        score.teamA !== 0 &&
        score.teamB !== 0 && (
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center items-start flex-col bg-[#6EABDA] text-white h-full w-7 absolute top-0 right-0 overflow-hidden"
          >
            <p
              className={`${score.teamA && score.teamA.toString().length > 2 ? "text-start pl-1" : "text-center pl-0"} w-full`}
            >
              {score.teamA}
            </p>
            <div className="h-0.5 w-7 my-0.5 bg-body z-10" />
            <p
              className={`${score.teamB && score.teamB.toString().length > 2 ? "text-start pl-1" : "text-center pl-0"} w-full`}
            >
              {score.teamB}
            </p>
            {((score.teamA && score.teamA.toString().length > 2) ||
              (score.teamB && score.teamB.toString().length > 2)) && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#6EABDA] to-[120%]" />
            )}
          </div>
        )
      )}
      {isModalOpen && (
        <ScoreModal
          match={match}
          teams={teams}
          setIsModalOpen={setIsModalOpen}
          setScore={setScore}
        />
      )}
    </section>
  );
};

export default BracketRound;
