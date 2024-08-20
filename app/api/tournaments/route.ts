import { NextResponse } from "next/server";
import * as z from "zod";

import db from "@/prisma/db";
import { TournamentSchema } from "@/schemas";

export const POST = async (request: Request) => {
  const data: z.infer<typeof TournamentSchema> = await request.json();

  const validateFields = TournamentSchema.safeParse(data);

  if (!validateFields.success) {
    return NextResponse.json(
      { error: "Nevažeća polja!", details: validateFields.error.errors },
      { status: 400 },
    );
  }

  try {
    const existingTournament = await db.tournament.findUnique({
      where: {
        tournamentName: validateFields.data.tournamentName,
      },
    });

    if (existingTournament) {
      return NextResponse.json(
        { error: "Ime turnira je već zauzeto!" },
        { status: 409 },
      );
    }

    await db.tournament.create({
      data: validateFields.data,
    });

    return NextResponse.json(
      { success: "Uspješno napravljen turnir!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Veza sa bazom podataka je prekinuta, probajte ponovo." },
      { status: 500 },
    );
  }
};

// foreign key da povezem usera sa turnirima koje ima
export const GET = async () => {
  const tournaments = await db.tournament.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return NextResponse.json({ data: tournaments }, { status: 201 });
};

export const DELETE = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const tournamentId = searchParams.get("id");

  if (tournamentId)
    await db.tournament.delete({
      where: { tournamentId },
    });
};
