import React from "react";

import db from "@/prisma/db";

const SingleTournamentPage = async ({ params }: { params: { id: string } }) => {
  const tournament = await db.tournament.findUnique({
    where: { tournamentId: params.id },
  });

  return <div>{tournament?.tournamentName}</div>;
};

export default SingleTournamentPage;
