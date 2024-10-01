import React from "react";

import BracketField from "./BracketField";

const Match = ({
  match,
  teams,
}: {
  match: number[];
  teams: string[] | undefined;
}) => {
  return (
    <article className="mb-10">
      <BracketField match={match[0]} team={teams && teams[match[0]]} />
      <BracketField match={match[1]} team={teams && teams[match[1]]} />
    </article>
  );
};

export default Match;
