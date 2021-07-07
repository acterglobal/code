/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[follower_acter_id,following_acter_id]` on the table `acter_connections`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "acter_follower_following" ON "acter_connections"("follower_acter_id", "following_acter_id");
