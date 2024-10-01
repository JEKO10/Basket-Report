/*
  Warnings:

  - The primary key for the `Match` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `matchId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `round` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `scoreTeamA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `scoreTeamB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `tournamentId` on the `Match` table. All the data in the column will be lost.
  - The required column `id` was added to the `Match` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `roundId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreA` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scoreB` to the `Match` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Match" DROP CONSTRAINT "Match_pkey",
DROP COLUMN "matchId",
DROP COLUMN "round",
DROP COLUMN "scoreTeamA",
DROP COLUMN "scoreTeamB",
DROP COLUMN "tournamentId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "roundId" TEXT NOT NULL,
ADD COLUMN     "scoreA" INTEGER NOT NULL,
ADD COLUMN     "scoreB" INTEGER NOT NULL,
ADD CONSTRAINT "Match_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Round" (
    "id" TEXT NOT NULL,
    "roundIndex" INTEGER NOT NULL,
    "tournamentId" TEXT NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("tournamentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
