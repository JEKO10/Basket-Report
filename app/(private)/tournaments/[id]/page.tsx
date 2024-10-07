import Link from "next/link";
import React from "react";

import { getTournamentById } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";
import { currentUser } from "@/auth/currentUser";
import { getWinner } from "@/utils/brackets";

import Match from "./components/Match";
import TournamentStatus from "./components/TournamentStatus";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentById(params.id);
  const user = await getUserByid(data?.creatorId);
  const loggedUser = await currentUser();
  const { winner, secondPlace } = await getWinner(data?.tournamentId);
  const isOwner = loggedUser?.id === data?.creatorId;

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
          {data && (
            <TournamentStatus
              id={data.tournamentId}
              isOwner={isOwner}
              hasStarted={data.hasStarted}
              hasEnded={data.hasEnded}
              scores={data.scores}
              bracket={data.bracket}
            />
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
      <section className="flex justify-between items-start">
        <article className="bg-accent flex justify-start items-center max-w-[50%] overflow-hidden p-10 rounded-md">
          {data?.bracket &&
            (data?.bracket as number[][][]).map((round, roundIndex) => (
              <div key={roundIndex} className="mr-14">
                {round.map((match, matchIndex) => (
                  <Match
                    key={matchIndex}
                    match={match}
                    teams={data.teams}
                    roundIndex={roundIndex}
                    matchIndex={matchIndex}
                    id={data.tournamentId}
                    bracketRounds={data.bracket}
                    scores={data.scores}
                    hasStarted={data.hasStarted}
                    // hasEnded={data.hasEnded}
                  />
                ))}
              </div>
            ))}
        </article>
        {winner && data?.hasEnded && (
          <article className="text-center flex-1">
            <h3 className="text-2xl">Konačni rezultati</h3>
            <div>
              <p className="my-5 text-2xl text-yellow-400">
                🏅 {winner && winner}
              </p>
              <p className="my-5 text-2xl text-gray-500">🥈 {secondPlace}</p>
            </div>
          </article>
        )}
      </section>
    </section>
  );
};

export default SingleTournamentPage;
