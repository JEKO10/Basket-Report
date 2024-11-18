import Link from "next/link";
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
    <section className="px-2 sm:px-10">
      <Search page="users" />
      <article className="flex flex-wrap gap-5">
        {data.length === 0 && (
          <p className="text-xl italic font-medium mb-6">
            Nije pronađen nijedan korisnik!
          </p>
        )}
        {data.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.username}`}
            className="bg-background text-text w-fit px-5 py-4 rounded-lg transition hover:bg-text hover:text-background"
          >
            <h3 className="text-lg md:text-xl font-medium leading-none">
              {user.username}
            </h3>
            <p className="text-sm md:text-base">{user.email}</p>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default UsersPage;
