import Link from "next/link";
import React from "react";

import { getAllTournaments } from "@/actions/tournaments";
import Navbar from "@/components/Navbar";

const TournamentsPage = async () => {
  const { data } = await getAllTournaments();

  return (
    <section>
      <Navbar />
      <input
        type="text"
        placeholder="Unesi ime turnira..."
        className="bg-accent w-full my-5 py-2 px-3 rounded-md outline-none placeholder-[#2f6feb]"
      />
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
            </Link>
          ))}
      </article>
    </section>
  );
};

export default TournamentsPage;
