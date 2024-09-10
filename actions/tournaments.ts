"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";

import db from "@/prisma/db";
import { TournamentSchema } from "@/schemas";

export const createTournament = async (
  formData: z.infer<typeof TournamentSchema>,
  userId: string | undefined
) => {
  const validateFields = TournamentSchema.safeParse(formData);

  if (!validateFields.success) {
    return {
      error: "Nevažeća polja!",
      details: validateFields.error.errors,
    };
  }

  try {
    const existingTournament = await db.tournament.findUnique({
      where: {
        tournamentName: validateFields.data.tournamentName,
      },
    });

    if (existingTournament) {
      return { error: "Ime turnira je već zauzeto!" };
    }

    await db.tournament.create({
      data: {
        ...validateFields.data,
        creator: {
          connect: { id: userId },
        },
      },
    });

    revalidatePath("/profile");

    return { success: "Uspješno napravljen turnir!" };
  } catch (error) {
    return { error: "Veza sa bazom podataka je prekinuta, probajte ponovo." };
  }
};

export const getAllTournaments = async () => {
  const tournaments = await db.tournament.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return { data: tournaments };
};

export const getTournamentsById = async (tournamentId: string) => {
  return await db.tournament.findUnique({
    where: { tournamentId },
  });
};

export const getTournamentsByName = async (query: string) => {
  const { data } = await getAllTournaments();

  if (!query || query.trim() === "") {
    return { data };
  }

  try {
    const tournaments = await db.tournament.findMany({
      where: {
        tournamentName: {
          startsWith: query,
          mode: "insensitive",
        },
      },
    });

    return { data: tournaments };
  } catch (error) {
    return { data: [] };
  }
};

export const deleteTournament = async (tournamentId: string) => {
  try {
    await db.tournament.delete({
      where: { tournamentId },
    });

    revalidatePath("/profile");
    return { success: true };
  } catch (error) {
    return { error: "Greška pri brisanju turnira." };
  }
};

export const getUserTournaments = async (creatorId: string | undefined) => {
  return await db.tournament.findMany({
    where: {
      creatorId,
    },
  });
};
