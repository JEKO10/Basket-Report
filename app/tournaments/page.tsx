import React from "react";

import Navbar from "@/components/Navbar";

import Search from "./components/Search";
import Table from "./components/Table";

const TournamentsPage = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const query = searchParams.query || "";

  return (
    <section>
      <Navbar />
      <Search />
      <Table query={query} />
    </section>
  );
};

export default TournamentsPage;
