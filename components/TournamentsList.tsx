"use client";

import Link from "next/link";
import React from "react";
import * as z from "zod";

import { deleteTournament } from "@/actions/tournaments";
import DeleteButton from "@/app/(public)/profile/components/DeleteButton";
import { TournamentSchema } from "@/schemas";

const ExtendedTournamentSchema = TournamentSchema.extend({
  tournamentId: z.string(),
  createdAt: z.date(),
  creator: z
    .object({
      username: z.string(),
    })
    .optional(),
});

const TournamentsList = ({
  data,
  page,
  isUser,
}: {
  data: z.infer<typeof ExtendedTournamentSchema>[] | undefined;
  page: "profile" | "tournaments";
  isUser: boolean;
}) => {
  return (
    <article className="bg-accent mt-5 mb-10 p-5 rounded">
      {page === "tournaments" && (
        <div className="flex justify-center sm:justify-between items-center sm:items-start flex-col sm:flex-row mb-5 text-lg px-5 2xl:[&>p]:px-10 xl:[&>p:not(:last-child)]:min-w-[100px] 2xl:[&>p:not(:last-child)]:min-w-[300px]">
          <p>Ime</p>
          <p>Organizator</p>
          <p>Sport</p>
          <p>Učesnici</p>
          <p>Početak</p>
        </div>
      )}
      {data?.length === 0 && !isUser && (
        <p className="text-xl italic font-medium">
          {page === "profile"
            ? "Nemate nijedan turnir!"
            : "Ne možemo pronaći nijedan turnir!"}
        </p>
      )}
      {data &&
        data.map((tournament) => (
          <Link
            href={`/tournaments/${tournament.tournamentId}`}
            key={tournament.tournamentId}
            className={`flex ${page === "tournaments" && "justify-center items-center flex-wrap flex-col sm:flex-row sm:flex-nowrap"} ${page === "profile" && "flex-wrap gap-x-5 gap-y-2"} justify-between align-center bg-body text-secondary text-xl italic font-medium px-5 2xl:px-10 py-4 border-b-2 border-accent cursor-default transition hover:bg-primary hover:text-[#fff]`}
          >
            {page === "tournaments" && (
              <>
                <p className="xl:min-w-[100px] 2xl:min-w-[300px]">
                  {tournament.tournamentName}
                </p>
                <p className="xl:min-w-[100px] 2xl:min-w-[300px]">
                  {tournament.creator?.username}
                </p>
                <p className="xl:min-w-[100px] 2xl:min-w-[300px]">
                  {tournament.tournamentSport}
                </p>
                <p className="xl:min-w-[100px] 2xl:min-w-[300px]">
                  {tournament.teams.length === 0
                    ? tournament.participants
                    : tournament.teams.length}
                </p>
                <p className="2xl:min-w-[200px]">
                  {tournament.tournamentDate.toISOString().slice(5, 10)}
                </p>
              </>
            )}
            {page === "profile" && (
              <>
                <p className="text-base md:text-lg">
                  Ime: {tournament.tournamentName}
                </p>
                <p className="text-base md:text-lg">
                  Učesnici:{" "}
                  {tournament.teams.length === 0
                    ? tournament.participants
                    : tournament.teams.length}
                </p>
                <p className="text-base md:text-lg">
                  Sport: {tournament.tournamentSport}
                </p>
                <p className="text-base md:text-lg">
                  Početak:{" "}
                  {tournament.tournamentDate.toISOString().slice(5, 10)}
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
