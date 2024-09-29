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
      {roundIndex === 0 && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex justify-center items-center bg-[#6EABDA] text-white h-full absolute top-0 right-0 px-1 transition-colors cursor-pointer hover:text-black"
        >
          <TbEdit className="text-2xl" title="Dodaj rezultat" />
        </div>
      )}
      {isModalOpen && (
        <ScoreModal
          match={match}
          teams={teams}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default BracketRound;
