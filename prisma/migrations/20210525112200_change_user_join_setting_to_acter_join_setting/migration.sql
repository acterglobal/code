/*
  Warnings:

  - You are about to drop the column `user_join_setting` on the `acters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "acters" DROP COLUMN "user_join_setting",
ADD COLUMN     "acter_join_setting" "ActerJoinSettings" NOT NULL DEFAULT E'EVERYONE';
