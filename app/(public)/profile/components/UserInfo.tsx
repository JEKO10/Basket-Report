import React from "react";

import { currentUser } from "@/auth/currentUser";

const UserInfo = async () => {
  const user = await currentUser();

  return (
    <article className="flex justify-start align-center flex-col mb-16">
      <h3 className="text-2xl italic">{user?.username}</h3>
      <p className="text-sm">{user?.email}</p>
      {/* <button className="uppercase bg-background text-text text-sm font-medium tracking-wider w-max mt-5 px-3 py-1 rounded-lg transition hover:bg-primary">
          Uredi profil
        </button> */}
      <button className="uppercase bg-background text-text text-sm font-medium tracking-wider w-max mt-2 px-3 py-1 rounded-lg transition hover:bg-primary">
        Kopiraj URL profila
      </button>
    </article>
  );
};

export default UserInfo;
