import Link from "next/link";
import React from "react";

import { getUserByUsername } from "@/actions/user";

const SingleUserPage = async ({ params }: { params: { username: string } }) => {
  const data = await getUserByUsername(params.username);

  return (
    <section>
      <article className="mb-20">
        <h3 className="font-lusitana text-3xl mt-5 font-medium leading-none">
          {data?.username}
        </h3>
        <p className="text-secondary">{data?.email}</p>
      </article>
      <article>
        <h3 className="font-lusitana text-3xl mb-5 font-medium leading-none">
          Turniri korisnika {data?.username}:
        </h3>
        <div className="bg-accent mt-5 mb-10 p-5 rounded">
          {data?.tournaments.length === 0 && (
            <p className="text-xl italic font-medium">
              Nije pronađen nijedan turnir!
            </p>
          )}
          {data &&
            data?.tournaments.map((tournament) => (
              <Link
                href={`/tournaments/${tournament.tournamentId}`}
                key={tournament.tournamentId}
                className="flex justify-between align-center bg-body text-secondary text-xl italic font-medium px-10 py-4 border-b-2 border-accent cursor-default transition hover:bg-primary hover:text-[#fff]"
              >
                <p>Ime: {tournament.tournamentName}</p>
                <p>Format: {tournament.tournamentType}</p>
                <p>
                  Učesnici:{" "}
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
              </Link>
            ))}
        </div>
      </article>
    </section>
  );
};

export default SingleUserPage;
