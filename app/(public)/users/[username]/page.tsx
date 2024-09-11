import React from "react";

import { getUserByUsername } from "@/actions/user";

const SingleUserPage = async ({ params }: { params: { username: string } }) => {
  const data = await getUserByUsername(params.username);

  return <div>{data?.username}</div>;
};

export default SingleUserPage;
