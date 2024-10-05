import React from "react";

const TournamentStart = ({ isOwner }: { isOwner: boolean }) => {
  return (
    <>
      {isOwner && (
        <button className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65">
          Počni turnir
        </button>
      )}
    </>
  );
};

export default TournamentStart;
