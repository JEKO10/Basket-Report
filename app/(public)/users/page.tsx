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
    <section>
      <Search page="users" />
      <article>
        {data.length === 0 && (
          <p className="text-xl italic font-medium mb-6">
            Nije pronađen nijedan korisnik!
          </p>
        )}
        {data.map((user) => (
          <Link
            href={`/users/${user.username}`}
            key={user.id}
            className="block bg-background text-text w-[300px] my-5 px-5 py-4 rounded-lg transition hover:bg-text hover:text-background"
          >
            <h3 className="text-xl font-medium leading-none">
              {user.username}
            </h3>
            <p>{user.email}</p>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default UsersPage;
