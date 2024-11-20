import React from "react";

import { currentUser } from "@/auth/currentUser";

import CopyContainer from "./Copy";
import ProfilePicture from "./ProfilePicture";

const UserInfo = async () => {
  const user = await currentUser();

  return (
    <article className="flex justify-start items-start mt-5 md:mt-0 mb-36 relative">
      <ProfilePicture />
      <div className="mx-5">
        <h3 className="text-2xl italic">{user?.username}</h3>
        <p className="text-sm text-secondary">{user?.email}</p>
        <CopyContainer username={user?.username} />
      </div>
    </article>
  );
};

export default UserInfo;
