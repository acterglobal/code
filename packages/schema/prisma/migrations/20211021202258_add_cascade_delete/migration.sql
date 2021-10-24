-- DropForeignKey
ALTER TABLE "acter_connections" DROP CONSTRAINT "acter_connections_follower_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_connections" DROP CONSTRAINT "acter_connections_following_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_interests" DROP CONSTRAINT "acter_interests_acterId_fkey";

-- DropForeignKey
ALTER TABLE "acter_interests" DROP CONSTRAINT "acter_interests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "interests" DROP CONSTRAINT "interests_interest_type_id_fkey";

-- DropForeignKey
ALTER TABLE "invites" DROP CONSTRAINT "invites_on_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_on_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_to_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_acterId_fkey";

-- AddForeignKey
ALTER TABLE "acter_connections" ADD CONSTRAINT "acter_connections_follower_acter_id_fkey" FOREIGN KEY ("follower_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD CONSTRAINT "acter_connections_following_acter_id_fkey" FOREIGN KEY ("following_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_interests" ADD CONSTRAINT "acter_interests_acterId_fkey" FOREIGN KEY ("acterId") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_interests" ADD CONSTRAINT "acter_interests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_acter_id_fkey" FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interests" ADD CONSTRAINT "interests_interest_type_id_fkey" FOREIGN KEY ("interest_type_id") REFERENCES "interest_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_on_acter_id_fkey" FOREIGN KEY ("on_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_to_acter_id_fkey" FOREIGN KEY ("to_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_on_acter_id_fkey" FOREIGN KEY ("on_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_acterId_fkey" FOREIGN KEY ("acterId") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
