-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "hasEnded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasStarted" BOOLEAN NOT NULL DEFAULT false;
