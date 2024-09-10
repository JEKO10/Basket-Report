import React from "react";

import { getUsersByName } from "@/actions/user";
import Search from "@/components/Search";

const UsersPage = async ({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) => {
  const { data } = await getUsersByName(searchParams.query || "");

  return (
    <section>
      <Search page="users" />
      {data.length === 0 && (
        <p className="text-xl italic font-medium mb-6">
          Nije pronađen nijedan korisnik!
        </p>
      )}
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-background w-[300px] my-5 px-5 py-4 rounded-lg cursor-default transition hover:bg-primary"
        >
          <h3 className="text-xl text-text font-medium leading-none">
            {user.username}
          </h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
      ))}
    </section>
  );
};

export default UsersPage;
