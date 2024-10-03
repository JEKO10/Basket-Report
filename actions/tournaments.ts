"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";

import db from "@/prisma/db";
import { TournamentSchema } from "@/schemas";
import { handleRounds } from "@/utils/brackets";

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
      return { error: "Ime turnira je zauzeto!" };
    }

    const participantsCount = formData.teams.length
      ? formData.teams.length
      : formData.participants;
    const bracket = handleRounds(participantsCount);

    await db.tournament.create({
      data: {
        ...validateFields.data,
        bracket,
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
    include: {
      creator: true,
    },
  });

  return { data: tournaments };
};

export const getTournamentById = async (tournamentId: string) => {
  return await db.tournament.findUnique({
    where: { tournamentId },
    include: {
      scores: true,
    },
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
      include: {
        creator: true,
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
    include: {
      creator: true,
    },
  });
};

export const updateBracket = async (
  tournamentId: string,
  updatedBracket: any,
  newScore: {
    teamA: number;
    teamB: number;
    roundIndex: number;
    matchIndex: number;
  }
) => {
  try {
    const existingScores = await db.score.findMany({
      where: {
        tournamentId,
        roundIndex: newScore.roundIndex,
        matchIndex: newScore.matchIndex,
      },
    });

    if (existingScores.length > 0) {
      await Promise.all(
        existingScores.map((score) =>
          db.score.update({
            where: { id: score.id },
            data: {
              teamA: newScore.teamA,
              teamB: newScore.teamB,
            },
          })
        )
      );
    } else {
      await db.tournament.update({
        where: { tournamentId },
        data: {
          scores: {
            create: [
              {
                teamA: newScore.teamA,
                teamB: newScore.teamB,
                roundIndex: newScore.roundIndex,
                matchIndex: newScore.matchIndex,
              },
            ],
          },
        },
      });
    }

    await db.tournament.update({
      where: { tournamentId },
      data: {
        bracket: updatedBracket,
      },
    });

    revalidatePath(`/tournaments/${tournamentId}`);
  } catch (error) {
    return { error: "Error updating the bracket" };
  }
};
