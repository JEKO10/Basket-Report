import Link from "next/link";
import React from "react";

import { getTournamentsById } from "@/actions/tournaments";
import { getUserByid } from "@/actions/user";

import BracketField from "./components/BracketField";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentsById(params.id);
  const user = await getUserByid(data?.creatorId);

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
          data?.teams.map((team) => (
            <div key={team}>
              <p>{team}</p>
              {}
            </div>
          ))
        ) : (
          <>
            {Array.from({ length: data.participants }, (_, index) => (
              <BracketField key={index} index={index + 1} />
            ))}
          </>
        )}
      </article>
    </section>
  );
};

export default SingleTournamentPage;
