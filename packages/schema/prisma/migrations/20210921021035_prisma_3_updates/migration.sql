-- DropForeignKey
ALTER TABLE "acter_connections" DROP CONSTRAINT "acter_connections_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_connections" DROP CONSTRAINT "acter_connections_follower_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_connections" DROP CONSTRAINT "acter_connections_following_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_interests" DROP CONSTRAINT "acter_interests_acterId_fkey";

-- DropForeignKey
ALTER TABLE "acter_interests" DROP CONSTRAINT "acter_interests_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_interests" DROP CONSTRAINT "acter_interests_interestId_fkey";

-- DropForeignKey
ALTER TABLE "acter_type_rules" DROP CONSTRAINT "acter_type_rules_object_acter_type_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_type_rules" DROP CONSTRAINT "acter_type_rules_subject_acter_type_id_fkey";

-- DropForeignKey
ALTER TABLE "acters" DROP CONSTRAINT "acters_acter_type_id_fkey";

-- DropForeignKey
ALTER TABLE "acters" DROP CONSTRAINT "acters_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_activityTypeId_fkey";

-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "interests" DROP CONSTRAINT "interests_interest_type_id_fkey";

-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_created_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_on_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_to_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_acter_id_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_author_id_fkey";

-- AddForeignKey
ALTER TABLE "acters" ADD CONSTRAINT "acters_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acters" ADD CONSTRAINT "acters_acter_type_id_fkey" FOREIGN KEY ("acter_type_id") REFERENCES "acter_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD CONSTRAINT "acter_connections_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD CONSTRAINT "acter_connections_follower_acter_id_fkey" FOREIGN KEY ("follower_acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD CONSTRAINT "acter_connections_following_acter_id_fkey" FOREIGN KEY ("following_acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_interests" ADD CONSTRAINT "acter_interests_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_interests" ADD CONSTRAINT "acter_interests_acterId_fkey" FOREIGN KEY ("acterId") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_interests" ADD CONSTRAINT "acter_interests_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "interests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD CONSTRAINT "acter_type_rules_subject_acter_type_id_fkey" FOREIGN KEY ("subject_acter_type_id") REFERENCES "acter_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD CONSTRAINT "acter_type_rules_object_acter_type_id_fkey" FOREIGN KEY ("object_acter_type_id") REFERENCES "acter_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_activityTypeId_fkey" FOREIGN KEY ("activityTypeId") REFERENCES "activity_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_acter_id_fkey" FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_acter_id_fkey" FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interests" ADD CONSTRAINT "interests_interest_type_id_fkey" FOREIGN KEY ("interest_type_id") REFERENCES "interest_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_to_acter_id_fkey" FOREIGN KEY ("to_acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_on_acter_id_fkey" FOREIGN KEY ("on_acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "acter_follower_following" RENAME TO "acter_connections_follower_acter_id_following_acter_id_key";

-- RenameIndex
ALTER INDEX "acter_interests_unique" RENAME TO "acter_interests_acterId_interestId_key";

-- RenameIndex
ALTER INDEX "subject_object_acter_type_ids" RENAME TO "acter_type_rules_subject_acter_type_id_object_acter_type_id_key";

-- RenameIndex
ALTER INDEX "acter_types.name_unique" RENAME TO "acter_types_name_key";

-- RenameIndex
ALTER INDEX "slug_unique_for_acter_type" RENAME TO "acters_slug_acter_type_id_key";

-- RenameIndex
ALTER INDEX "activities.acter_id_unique" RENAME TO "activities_acter_id_key";

-- RenameIndex
ALTER INDEX "activity_types.name_unique" RENAME TO "activity_types_name_key";

-- RenameIndex
ALTER INDEX "interest_types.sort_order_index" RENAME TO "interest_types_sort_order_idx";

-- RenameIndex
ALTER INDEX "nameUniqueForParentInterestType" RENAME TO "interest_types_parent_interest_type_id_name_key";

-- RenameIndex
ALTER INDEX "nameUniqueForInterestType" RENAME TO "interests_interest_type_id_name_key";

-- RenameIndex
ALTER INDEX "notifications.on_acter_id_to_acter_id_type_index" RENAME TO "notifications_on_acter_id_to_acter_id_type_idx";

-- RenameIndex
ALTER INDEX "notifications.to_acter_id_viewed_at_index" RENAME TO "notifications_to_acter_id_viewed_at_idx";

-- RenameIndex
ALTER INDEX "users.email_unique" RENAME TO "users_email_key";
