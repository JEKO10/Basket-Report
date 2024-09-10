import React from "react";

import { getTournamentsById } from "@/actions/tournaments";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTournamentsById(params.id);

  return (
    <section className="p-8">
      <header className="flex justify-between items-center">
        <p className="font-lusitana text-3xl mt-5 mb-1">
          {data?.tournamentName}
        </p>
        <p className="italic font-medium text-[#6EABDA]">
          {data?.createdAt.toISOString().slice(0, 10)}
        </p>
      </header>
      <article>
        {!data?.bracketSize ? (
          data?.teams.map((team) => (
            <div key={team}>
              <p>{team}</p>
            </div>
          ))
        ) : (
          <p>{data.participants}</p>
        )}
      </article>
    </section>
  );
};

export default SingleTournamentPage;
