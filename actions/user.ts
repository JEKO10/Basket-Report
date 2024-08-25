"use server";

import db from "@/prisma/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: { username },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByid = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};
