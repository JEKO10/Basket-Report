import db from "@/prisma/db";

export const submitForm = async (data: {
  tournamentType: number;
  bracketSize: boolean;
  tournamentName: string;
  participants: number;
  teams: string;
  thirdPlace: boolean;
  randomize: boolean;
}) => {
  try {
    await db.tournament.create({
      data,
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating tournament:", error);
    return { success: false };
  }
};
