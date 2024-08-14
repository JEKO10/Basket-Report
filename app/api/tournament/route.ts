import { NextResponse } from "next/server";

import db from "@/prisma/db";

export const POST = async (request: Request) => {
  const data = await request.json();
  const tournament = await db.tournament.create({
    data,
  });

  return NextResponse.json({ data: tournament });
};
