"use client";

import { JsonValue } from "next-auth/adapters";
import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";

import BracketField from "./BracketField";
import ScoreModal from "./ScoreModal";

const Match = ({
  match,
  teams,
  matchIndex,
  roundIndex,
  id,
  bracketRounds,
  scores,
}: {
  match: number[];
  teams: string[] | undefined;
  matchIndex: number;
  roundIndex: number;
  id: string;
  bracketRounds: JsonValue;
  scores: {
    matchIndex: number;
    roundIndex: number;
    id: string;
    teamA: number;
    teamB: number;
    tournamentId: string;
  }[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bothTeamsExist = match[0] !== null && match[1] !== null;

  const score = scores.find(
    (s) => s.matchIndex === matchIndex && s.roundIndex === roundIndex
  ) || { teamA: null, teamB: null };

  const teamAWon =
    score.teamA !== null && score.teamB !== null && score.teamA > score.teamB;
  const teamBWon =
    score.teamA !== null && score.teamB !== null && score.teamB > score.teamA;

  return (
    <>
      <section className="mb-10 relative">
        <BracketField match={match[0]} team={teams && teams[match[0] - 1]} />
        <BracketField match={match[1]} team={teams && teams[match[1] - 1]} />
        {bothTeamsExist && score.teamA === null && score.teamB === null && (
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center items-center bg-[#6EABDA] text-white h-full absolute top-0 right-0 px-1 transition-colors cursor-pointer hover:text-black"
          >
            <TbEdit className="text-2xl" title="Dodaj rezultat" />
          </div>
        )}
        {score.teamA !== null && score.teamB !== null && (
          <div
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center items-start flex-col bg-[#6EABDA] text-white h-full w-7 absolute top-0 right-0 overflow-hidden"
          >
            <p
              className={`${
                score.teamA && score.teamA.toString().length > 2
                  ? "text-start pl-1"
                  : "text-center pl-0"
              } w-full select-none ${teamAWon ? "text-yellow-400 font-bold" : ""}`}
            >
              {score.teamA}
            </p>
            <div className="h-0.5 w-full my-0.5 bg-accent z-10" />
            <p
              className={`${
                score.teamB && score.teamB.toString().length > 2
                  ? "text-start pl-1"
                  : "text-center pl-0"
              } w-full select-none ${teamBWon ? "text-yellow-400  font-bold" : ""}`}
            >
              {score.teamB}
            </p>
            {((score.teamA !== null && score.teamA.toString().length > 2) ||
              (score.teamB !== null && score.teamB.toString().length > 2)) && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#6EABDA] to-[120%]" />
            )}
          </div>
        )}
      </section>
      {isModalOpen && (
        <ScoreModal
          match={match}
          teams={teams}
          setIsModalOpen={setIsModalOpen}
          roundIndex={roundIndex}
          matchIndex={matchIndex}
          tournamentId={id}
          bracketRounds={bracketRounds}
        />
      )}
    </>
  );
};

export default Match;
