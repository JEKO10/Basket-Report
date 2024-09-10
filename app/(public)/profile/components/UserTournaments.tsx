import Link from "next/link";
import React from "react";

import { getUserTournaments } from "@/actions/tournaments";
import { currentUser } from "@/auth/currentUser";
import TournamentsList from "@/components/TournamentsList";

const UserTournaments = async () => {
  const user = await currentUser();
  const data = await getUserTournaments(user?.id);

  return (
    <section>
      <h2 className="font-lusitana text-3xl mt-5 mb-1">Vaši turniri</h2>
      <TournamentsList data={data} page="profile" />
      <Link
        href="/new"
        className="flex justify-center align-center w-max bg-background text-text text-md italic font-medium tracking-wide py-3 px-5 rounded-lg cursor-pointer hover:bg-primary"
      >
        {data.length === 0
          ? "Napravite prvi turnir!"
          : "Napravite novi turnir!"}
      </Link>
    </section>
  );
};

export default UserTournaments;
