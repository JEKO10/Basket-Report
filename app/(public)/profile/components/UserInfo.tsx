import Image from "next/image";
import React from "react";

import { currentUser } from "@/auth/currentUser";

import imgSrc from "../../../../public/profile.jpg";
import CopyContainer from "./Copy";

const UserInfo = async () => {
  const user = await currentUser();

  // items-center?
  return (
    <article className="flex justify-start items-start mt-5 md:mt-0 mb-36 relative">
      <Image
        src={imgSrc}
        alt="Profile picture"
        className="rounded-full"
        height={50}
        width={50}
      />
      <div className="mx-5">
        <h3 className="text-2xl italic">{user?.username}</h3>
        <p className="text-sm">{user?.email}</p>
        <CopyContainer username={user?.username} />
      </div>
    </article>
  );
};

export default UserInfo;
