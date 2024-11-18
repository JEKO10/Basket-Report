import React from "react";

import UserInfo from "./components/UserInfo";
import UserTournaments from "./components/UserTournaments";

const ProfilePage = async () => {
  return (
    <div className="p-5 sm:px-10">
      <UserInfo />
      <UserTournaments />
    </div>
  );
};

export default ProfilePage;
