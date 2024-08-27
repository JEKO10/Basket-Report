import Link from "next/link";
import React from "react";

import { deleteTournament, getAll } from "@/actions/tournaments";
import DeleteButton from "@/components/DeleteButton";

const ProfilePage = async () => {
  const { data } = await getAll();

  return (
    <div>
      <article>
        <h2 className="font-lusitana text-3xl my-5">Vaši turniri</h2>
        {data.length === 0 && (
          <article className="my-10">
            <p className="text-xl italic font-medium mb-6">
              Još uvijek nemate ni jedan turnir!
            </p>
            <Link
              href="/new"
              className="flex justify-center align-center w-max bg-background text-text text-md italic font-medium tracking-wide py-3 px-5 rounded-lg cursor-pointer hover:bg-primary"
            >
              Napravite svoj prvi turnir!
            </Link>
          </article>
        )}
        {data &&
          data.map((tournament) => (
            <Link
              href={`/tournaments/${tournament.tournamentId}`}
              key={tournament.tournamentId}
              className="flex justify-between align-center bg-background text-text text-xl italic font-medium my-10 px-10 py-4 rounded-lg cursor-pointer hover:bg-primary"
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
              <DeleteButton
                tournamentId={tournament.tournamentId}
                onDelete={deleteTournament}
              />
            </Link>
          ))}
      </article>
    </div>
  );
};

export default ProfilePage;
