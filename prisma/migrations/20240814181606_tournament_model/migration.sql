-- CreateTable
CREATE TABLE "Team" (
    "teamId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tournamentId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateTable
CREATE TABLE "Tournament" (
    "tournamentId" TEXT NOT NULL,
    "tournamentType" INTEGER NOT NULL,
    "bracketSize" BOOLEAN NOT NULL,
    "tournamentName" TEXT NOT NULL,
    "participants" INTEGER NOT NULL,
    "teams" TEXT NOT NULL,
    "thirdPlace" BOOLEAN NOT NULL,
    "randomize" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("tournamentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_tournamentName_key" ON "Tournament"("tournamentName");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("tournamentId") ON DELETE RESTRICT ON UPDATE CASCADE;
