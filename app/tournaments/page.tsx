import React from "react";

import { getTournamentsByName } from "@/actions/tournaments";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import TournamentsList from "@/components/TournamentsList";

const TournamentsPage = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const { data } = await getTournamentsByName(searchParams.query || "");

  return (
    <section>
      <Navbar />
      <Search page="tournaments" />
      <TournamentsList data={data} page="tournaments" />
    </section>
  );
};

export default TournamentsPage;
