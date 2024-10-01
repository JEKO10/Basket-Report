import Link from "next/link";
import React from "react";

import { getTournamentById } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";
import { currentUser } from "@/auth/currentUser";
import { handleRounds } from "@/utils/brackets";

import Match from "./components/Match";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentById(params.id);
  const user = await getUserByid(data?.creatorId);
  const loggedUser = await currentUser();
  const isOwner = loggedUser?.id === data?.creatorId;

  const participantsCount = data?.teams.length
    ? data.teams.length
    : data?.participants || 0;

  const bracketRounds = handleRounds(participantsCount);

  return (
    <section className="p-8">
      <header className="flex justify-between items-start mb-20">
        <div>
          <h3 className="font-lusitana text-3xl mt-5 font-medium">
            {data?.tournamentName}
          </h3>
          <Link href={`/users/${user?.username}`}>
            <p className="italic font-medium">
              Organizator:{" "}
              <span className="text-secondary underline">{user?.username}</span>
            </p>
          </Link>
          {isOwner && (
            <button className="bg-background text-text text-lg font-medium italic tracking-wider mt-3 py-2 px-5 rounded-lg transition hover:bg-background/65">
              Počni turnir
            </button>
          )}
        </div>
        <div className="flex justify-end items-end flex-col [&>p]:italic [&>p]:font-medium [&>p]:text-[#6EABDA]">
          <p>{data?.tournamentSport} - Sport</p>
          <p>{data?.tournamentType} - Format</p>
          <p>
            {data?.teams.length === 0 ? data?.participants : data?.teams.length}{" "}
            - Učesnici
          </p>
          <p>{data?.tournamentDate.toISOString().slice(0, 10)} - Početak</p>
          <p>{data?.createdAt.toISOString().slice(0, 10)} - Napravljen</p>
        </div>
      </header>
      <div className="flex justify-start items-center">
        {bracketRounds.map((round, roundIndex) => (
          <section key={roundIndex} className="mr-14">
            {round.map((match, index) => (
              <Match
                key={index}
                match={match}
                teams={data?.teams}
                roundIndex={roundIndex}
              />
            ))}
          </section>
        ))}
      </div>
    </section>
  );
};

export default SingleTournamentPage;
