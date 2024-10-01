"use client";

import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";

import BracketField from "./BracketField";

const Match = ({
  match,
  teams,
  roundIndex,
}: {
  match: number[];
  teams: string[] | undefined;
  roundIndex: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="mb-10 relative">
      <BracketField
        match={roundIndex === 0 && match[0]}
        team={teams && teams[match[0]]}
      />
      <BracketField
        match={roundIndex === 0 && match[1]}
        team={teams && teams[match[1]]}
      />
      {roundIndex === 0 && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex justify-center items-center bg-[#6EABDA] text-white h-full absolute top-0 right-0 px-1 transition-colors cursor-pointer hover:text-black"
        >
          <TbEdit className="text-2xl" title="Dodaj rezultat" />
        </div>
      )}
    </article>
  );
};

export default Match;
