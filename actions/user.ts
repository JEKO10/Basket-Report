"use server";

import db from "@/prisma/db";

export const getAllUsers = async () => {
  const users = await db.user.findMany({
    orderBy: {
      username: "desc",
    },
  });

  return { data: users };
};

export const getUsersByName = async (query: string) => {
  const { data } = await getAllUsers();

  if (!query || query.trim() === "") {
    return { data };
  }

  try {
    const users = await db.user.findMany({
      where: {
        username: {
          startsWith: query,
          mode: "insensitive",
        },
      },
    });

    return { data: users };
  } catch (error) {
    return { data: [] };
  }
};

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

export const getUserByid = async (id: string | undefined) => {
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
