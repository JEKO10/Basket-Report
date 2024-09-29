"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as z from "zod";

import { deleteTournament } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";
import DeleteButton from "@/app/(public)/profile/components/DeleteButton";
import { TournamentSchema } from "@/schemas";

const ExtendedTournamentSchema = TournamentSchema.extend({
  tournamentId: z.string(),
  createdAt: z.date(),
  creatorId: z.string(),
});

const TournamentsList = ({
  data,
  page,
}: {
  data: z.infer<typeof ExtendedTournamentSchema>[];
  page: "profile" | "tournaments";
}) => {
  const [creator, setCreator] = useState<{
    id: string;
    username: string;
    email: string;
    password: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      setIsLoading(true);

      for (const tournament of data) {
        setCreator(await getUserByid(tournament.creatorId));
      }

      setIsLoading(false);
    };

    fetchCreators();
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin h-24 w-24 border-4 border-t-transparent border-blue-500 rounded-full"></div>
      </div>
    );
  }
  return (
    <article className="bg-accent mt-5 mb-10 p-5 rounded">
      {page === "tournaments" && (
        <div className="flex justify-start items-center mb-5 text-lg [&>p]:px-10 [&>p:not(:last-child)]:min-w-[300px] ">
          <p>Ime</p>
          <p>Organizator</p>
          <p>Sport</p>
          <p>Učesnici</p>
          <p>Početak</p>
        </div>
      )}
      {data.length === 0 && (
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
            className={`flex ${page === "tournaments" && "justify-start"} justify-between align-center bg-body text-secondary text-xl italic font-medium px-10 py-4 border-b-2 border-accent cursor-default transition hover:bg-primary hover:text-[#fff]`}
          >
            {page === "tournaments" && (
              <>
                <p className="min-w-[300px]">{tournament.tournamentName}</p>
                <p className="min-w-[300px]">{creator?.username}</p>
                <p className="min-w-[300px]">{tournament.tournamentSport}</p>
                <p className="min-w-[300px]">
                  {tournament.teams.length === 0
                    ? tournament.participants
                    : tournament.teams.length}
                </p>
                <p className="min-w-[200px]">
                  {tournament.tournamentDate.toISOString().slice(5, 10)}
                </p>
              </>
            )}
            {page === "profile" && (
              <>
                <p>Ime: {tournament.tournamentName}</p>
                <p>Organizator: {creator?.username}</p>
                <p>Sport: {tournament.tournamentSport}</p>
                <p>
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
