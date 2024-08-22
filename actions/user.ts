"use server";

import db from "@/prisma/db";

export const getUserByEmail = async (email: string, username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
        username,
      },
    });

    return user;
  } catch {
    return null;
  }
};
