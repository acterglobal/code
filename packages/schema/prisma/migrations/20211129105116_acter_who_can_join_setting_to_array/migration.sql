/*
  Warnings:

  - You are about to drop the column `acter_who_can_join_setting` on the `acters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "acters" DROP COLUMN "acter_who_can_join_setting",
ADD COLUMN     "acter_who_can_join_settings" "ActerWhoCanJoinSettings"[];
