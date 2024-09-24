import Link from "next/link";
import React from "react";

import { getTournamentsById } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";

import BracketField from "./components/BracketField";

const nextRound = (seed: number, participantsCount: number) => {
  return seed <= participantsCount ? seed : 0;
};

const handleBracket = (participants: number) => {
  const rounds = Math.ceil(Math.log(participants) / Math.log(2));

  if (participants < 2) {
    return [];
  }

  let matches = [[1, 2]];

  for (let round = 1; round < rounds; round++) {
    let roundMatches = [];
    let sum = Math.pow(2, round + 1) + 1;

    for (let i = 0; i < matches.length; i++) {
      let home = nextRound(matches[i][0], participants);
      let away = nextRound(sum - matches[i][0], participants);
      roundMatches.push([home, away]);

      home = nextRound(sum - matches[i][1], participants);
      away = nextRound(matches[i][1], participants);
      roundMatches.push([home, away]);
    }

    matches = roundMatches;
  }

  return matches;
};

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentsById(params.id);
  const user = await getUserByid(data?.creatorId);

  const bracket = handleBracket(data?.participants || 0);

  return (
    <section className="p-8">
      <header className="flex justify-between items-center mb-20">
        <div>
          <h3 className="font-lusitana text-3xl mt-5 font-medium">
            {data?.tournamentName}
          </h3>
          <Link href={`/users/${user?.username}`}>
            <p className="italic font-medium">
              Osnivač:{" "}
              <span className="text-secondary underline">{user?.username}</span>
            </p>
          </Link>
        </div>
        <p className="italic font-medium text-[#6EABDA]">
          {data?.createdAt.toISOString().slice(0, 10)}
        </p>
      </header>
      <article>
        {!data?.bracketSize ? (
          ""
        ) : (
          <>
            {bracket.map((match, index) => (
              <section key={index}>
                <BracketField match={match[0]} />
                <BracketField index={index + 1} match={match[1]} />
              </section>
            ))}
          </>
        )}
      </article>
    </section>
  );
};

export default SingleTournamentPage;
