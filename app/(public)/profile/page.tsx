import React from "react";

import UserInfo from "./components/UserInfo";
import UserTournaments from "./components/UserTournaments";

const ProfilePage = async () => {
  return (
    <div>
      <UserInfo />
      <UserTournaments />
    </div>
  );
};

export default ProfilePage;
