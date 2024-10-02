/*
  Warnings:

  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Round` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bracket` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_roundId_fkey";

-- DropForeignKey
ALTER TABLE "Round" DROP CONSTRAINT "Round_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "bracket" JSONB NOT NULL;

-- DropTable
DROP TABLE "Match";

-- DropTable
DROP TABLE "Round";
