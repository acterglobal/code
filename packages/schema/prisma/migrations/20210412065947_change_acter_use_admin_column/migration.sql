/*
  Warnings:

  - You are about to drop the column `auto_approve_followers` on the `acters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "acters" DROP COLUMN "auto_approve_followers",
ADD COLUMN     "use_admins" BOOLEAN NOT NULL DEFAULT false;
