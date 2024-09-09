import React from "react";

import { getAllUsers } from "@/actions/user";
import Navbar from "@/components/Navbar";

import Search from "../tournaments/components/Search";

const UsersPage = async () => {
  const { data } = await getAllUsers();

  return (
    <section>
      <Navbar />
      <Search />
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
