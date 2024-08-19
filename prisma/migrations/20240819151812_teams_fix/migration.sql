/*
  Warnings:

  - The `teams` column on the `Tournament` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "teams",
ADD COLUMN     "teams" TEXT[];
