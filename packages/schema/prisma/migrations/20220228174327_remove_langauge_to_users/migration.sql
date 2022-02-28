/*
  Warnings:

  - You are about to drop the column `language` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "language";

-- DropEnum
DROP TYPE "Language";
