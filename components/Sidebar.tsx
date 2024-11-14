import React from "react";

import { auth } from "@/auth/auth";

import SidebarList from "./SidebarList";

const Sidebar = async () => {
  const session = await auth();
  const isLoggedIn = !!session;

  return (
    <SidebarList isLoggedIn={isLoggedIn} username={session?.user.username} />
  );
};

export default Sidebar;
