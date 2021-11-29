/*
  Warnings:

  - You are about to drop the column `acter_who_can_join_settings` on the `acters` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ActerWhoCanJoinSetting" AS ENUM ('ALL', 'PEOPLE', 'ACTERS');

-- AlterTable
ALTER TABLE "acters" DROP COLUMN "acter_who_can_join_settings";

-- DropEnum
DROP TYPE "ActerWhoCanJoinSettings";
