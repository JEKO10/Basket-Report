"use client";

import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import Match from "./Match";

interface BracketProps {
  bracket: number[][][];
  teams: string[];
  tournamentId: string;
  scores: any;
  hasStarted: boolean;
  hasEnded: boolean;
}

const DraggableBracket = ({
  bracket,
  teams,
  tournamentId,
  scores,
  hasStarted,
  hasEnded,
}: BracketProps) => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);

  return (
    <div
      ref={ref}
      {...events}
      className="bg-accent flex justify-start items-center max-w-[50%] overflow-hidden p-10 rounded-md [&>div:not(:last-child)]:mr-14"
    >
      {bracket.map((round, roundIndex) => (
        <div key={roundIndex} className="[&>section:not(:last-child)]:mb-10">
          {round.map((match, matchIndex) => (
            <Match
              key={matchIndex}
              match={match}
              teams={teams}
              roundIndex={roundIndex}
              matchIndex={matchIndex}
              id={tournamentId}
              bracketRounds={bracket}
              scores={scores}
              hasStarted={hasStarted}
              hasEnded={hasEnded}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DraggableBracket;
