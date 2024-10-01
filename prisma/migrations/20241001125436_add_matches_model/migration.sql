-- CreateTable
CREATE TABLE "Match" (
    "matchId" TEXT NOT NULL,
    "round" INTEGER NOT NULL,
    "teamA" TEXT NOT NULL,
    "teamB" TEXT NOT NULL,
    "scoreTeamA" INTEGER,
    "scoreTeamB" INTEGER,
    "winner" TEXT,
    "tournamentId" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("matchId")
);

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("tournamentId") ON DELETE RESTRICT ON UPDATE CASCADE;
