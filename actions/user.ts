"use server";

import db from "@/prisma/db";

export const getUserByEmail = async (email: string, username: string) => {
  try {
    const userByEmail = await db.user.findUnique({
      where: { email },
    });

    if (userByEmail) return userByEmail;

    const userByUsername = await db.user.findUnique({
      where: { username },
    });

    return userByUsername;
  } catch (error) {
    return null;
  }
};
