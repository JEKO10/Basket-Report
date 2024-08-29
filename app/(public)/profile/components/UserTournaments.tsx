import Link from "next/link";
import React from "react";

import { deleteTournament, getAllTournaments } from "@/actions/tournaments";

import DeleteButton from "./DeleteButton";

const UserTournaments = async () => {
  const { data } = await getAllTournaments();

  return (
    <section>
      <h2 className="font-lusitana text-3xl mt-5 mb-1">Vaši turniri</h2>
      <article className="mt-5 mb-10">
        {data.length === 0 && (
          <p className="text-xl italic font-medium mb-6">
            Nemate ni jedan turnir!
          </p>
        )}
        {data &&
          data.map((tournament) => (
            <Link
              href={`/tournaments/${tournament.tournamentId}`}
              key={tournament.tournamentId}
              className="flex justify-between align-center bg-background text-text text-xl italic font-medium my-5 px-10 py-4 rounded-lg cursor-default transition hover:bg-primary"
            >
              <p>Ime: {tournament.tournamentName}</p>
              <p>Format: {tournament.tournamentType}</p>
              <p>
                Učesnici:{" "}
                {tournament.teams.length === 0
                  ? tournament.participants
                  : tournament.teams.length}
              </p>
              <p>Meč za treće mjesto: {tournament.thirdPlace ? "Da" : "Ne"}</p>
              <p>
                Napravljeno: {tournament.createdAt.toISOString().slice(5, 10)}
              </p>
              <DeleteButton
                tournamentId={tournament.tournamentId}
                onDelete={deleteTournament}
              />
            </Link>
          ))}
      </article>
      <Link
        href="/new"
        className="flex justify-center align-center w-max bg-background text-text text-md italic font-medium tracking-wide py-3 px-5 rounded-lg cursor-pointer hover:bg-primary"
      >
        {data.length === 0
          ? "Napravite prvi turnir!"
          : "Napravite novi turnir!"}
      </Link>
    </section>
  );
};

export default UserTournaments;
