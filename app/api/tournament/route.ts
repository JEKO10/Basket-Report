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
    const tournament = await db.tournament.create({
      data: validateFields.data,
    });

    return NextResponse.json({ data: tournament }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Veza sa bazom podataka je prekinuta, probajte ponovo." },
      { status: 500 },
    );
  }
};
