/*
  Warnings:

  - Made the column `tournamentDate` on table `Tournament` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tournamentSport` on table `Tournament` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "tournamentDate" SET NOT NULL,
ALTER COLUMN "tournamentDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "tournamentSport" SET NOT NULL;
