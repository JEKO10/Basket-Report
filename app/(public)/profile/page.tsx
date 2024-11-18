import React from "react";

import UserInfo from "./components/UserInfo";
import UserTournaments from "./components/UserTournaments";

const ProfilePage = async () => {
  return (
    <div className="px-2 py-5 sm:pl-10 sm:pr-0">
      <UserInfo />
      <UserTournaments />
    </div>
  );
};

export default ProfilePage;
