import React from "react";

import { getTournamentsByName } from "@/actions/tournaments";
import Navbar from "@/components/Navbar";
import TournamentsList from "@/components/TournamentsList";

import Search from "./components/Search";

const TournamentsPage = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const { data } = await getTournamentsByName(searchParams.query || "");

  return (
    <section>
      <Navbar />
      <Search />
      <TournamentsList data={data} page="tournaments" />
    </section>
  );
};

export default TournamentsPage;
