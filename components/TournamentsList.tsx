import Link from "next/link";
import React from "react";
import * as z from "zod";

import { deleteTournament } from "@/actions/tournaments";
import DeleteButton from "@/app/(public)/profile/components/DeleteButton";
import { TournamentSchema } from "@/schemas";

const ExtendedTournamentSchema = TournamentSchema.extend({
  tournamentId: z.string(),
  createdAt: z.date(),
});

const TournamentsList = ({
  data,
  page,
}: {
  data: z.infer<typeof ExtendedTournamentSchema>[];
  page: "profile" | "tournaments";
}) => {
  return (
    <article className="bg-accent mt-5 mb-10 p-5 rounded">
      {page === "tournaments" && (
        <div className="flex justify-start items-center mb-5 text-lg">
          <p className="px-10 min-w-[300px]">Ime</p>
          <p className="px-10 min-w-[300px]">Format</p>
          <p className="px-10 min-w-[300px]">Učesnici</p>
          <p className="px-10 min-w-[300px]">Meč za treće mjesto</p>
          <p className="px-10 min-w-[300px]">Napravljeno</p>
        </div>
      )}
      {data.length === 0 && (
        <p className="text-xl italic font-medium mb-6">
          {page === "profile"
            ? "Nemate ni jedan turnir!"
            : "Nema turnira koji se poklapa sa Vašom pretragom!"}
        </p>
      )}
      {data &&
        data.map((tournament) => (
          <Link
            href={`/tournaments/${tournament.tournamentId}`}
            key={tournament.tournamentId}
            className={`flex ${page === "tournaments" && "justify-start"} justify-between align-center bg-body text-secondary text-xl italic font-medium px-10 py-4 border-b-2 border-accent cursor-default transition hover:bg-primary`}
          >
            {page === "tournaments" && (
              <>
                <p className="min-w-[300px]">{tournament.tournamentName}</p>
                <p className="min-w-[300px]">{tournament.tournamentType}</p>
                <p className="min-w-[300px]">
                  {tournament.teams.length === 0
                    ? tournament.participants
                    : tournament.teams.length}
                </p>
                <p className="min-w-[300px]">
                  {tournament.thirdPlace ? "Da" : "Ne"}
                </p>
                <p className="min-w-[300px]">
                  {tournament.createdAt.toISOString().slice(5, 10)}
                </p>
              </>
            )}
            {page === "profile" && (
              <>
                <p>Ime: {tournament.tournamentName}</p>
                <p>Format: {tournament.tournamentType}</p>
                <p>
                  Učesnici:
                  {tournament.teams.length === 0
                    ? tournament.participants
                    : tournament.teams.length}
                </p>
                <p>
                  Meč za treće mjesto: {tournament.thirdPlace ? "Da" : "Ne"}
                </p>
                <p>
                  Napravljeno: {tournament.createdAt.toISOString().slice(5, 10)}
                </p>
              </>
            )}
            {page === "profile" && (
              <DeleteButton
                onDelete={deleteTournament}
                tournamentId={tournament.tournamentId}
              />
            )}
          </Link>
        ))}
    </article>
  );
};

export default TournamentsList;
