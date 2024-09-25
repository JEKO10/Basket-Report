import React from "react";

import BracketField from "./BracketField";

const BracketRound = ({
  index,
  match,
  teams,
}: {
  index: number;
  match: number[];
  teams?: string[];
}) => {
  return (
    <section className="w-fit mb-5 relative">
      {teams ? (
        <>
          <BracketField match={match[0]} teamName={teams[match[0] - 1]} />
          <BracketField
            index={index + 1}
            match={match[1]}
            teamName={teams[match[1] - 1]}
          />
        </>
      ) : (
        <>
          <BracketField match={match[0]} />
          <BracketField index={index + 1} match={match[1]} />
        </>
      )}
      <div className="bg-white h-1 w-2 absolute top-[1.7rem] -right-3" />
      {index % 2 === 0 && (
        <>
          <div className="bg-white h-[5.13rem] w-1 absolute top-[1.7rem] -right-4" />
          <div className="bg-white h-1 w-3 absolute top-16 -right-7" />
        </>
      )}
    </section>
  );
};

export default BracketRound;
