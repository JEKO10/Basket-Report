import Link from "next/link";
import React from "react";

import { getTournamentsById } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";
import { handleBracket } from "@/utils/brackets";

import BracketRound from "./components/BracketRound";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentsById(params.id);
  const user = await getUserByid(data?.creatorId);
  const participantsCount = data?.teams.length
    ? data.teams.length
    : data?.participants || 0;

  const rounds = Math.ceil(Math.log(participantsCount) / Math.log(2));

  let participants = participantsCount;
  let bracketRounds = [];

  for (let i = 0; i < rounds; i++) {
    const bracket = handleBracket(participants);

    participants = Math.floor(participants / 2);

    bracketRounds.push(bracket);
  }

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
        </div>
        <div className="flex justify-end items-end flex-col">
          <p className="italic font-medium text-[#6EABDA]">
            {data?.tournamentSport} - Sport
          </p>
          <p className="italic font-medium text-[#6EABDA]">
            {data?.tournamentType} - Format
          </p>
          <p className="italic font-medium text-[#6EABDA]">
            {data?.teams.length === 0 ? data?.participants : data?.teams.length}{" "}
            - Učesnici
          </p>
          <p className="italic font-medium text-[#6EABDA]">
            {data?.tournamentDate.toISOString().slice(0, 10)} - Početak
          </p>
          <p className="italic font-medium text-[#6EABDA]">
            {data?.createdAt.toISOString().slice(0, 10)} - Napravljen
          </p>
        </div>
      </header>
      <div className="flex justify-start items-center">
        {!data?.bracketSize ? (
          <>
            {bracketRounds.map((round, roundIndex) => (
              <div key={roundIndex} className="mr-10">
                {round.map((match, matchIndex) => (
                  <BracketRound
                    key={matchIndex}
                    match={match}
                    teams={data?.teams}
                    roundIndex={roundIndex}
                  />
                ))}
              </div>
            ))}
          </>
        ) : (
          <>
            {bracketRounds.map((round, roundIndex) => (
              <div key={roundIndex} className="mr-10">
                {round.map((match, matchIndex) => (
                  <BracketRound
                    key={matchIndex}
                    match={match}
                    teams={data?.teams}
                    roundIndex={roundIndex}
                  />
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default SingleTournamentPage;
