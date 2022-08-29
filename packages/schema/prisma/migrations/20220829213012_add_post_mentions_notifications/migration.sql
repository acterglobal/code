-- AlterEnum
ALTER TYPE "NotificationType" ADD VALUE 'NEW_MENTION';

-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "post_mention_id" TEXT;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_post_mention_id_fkey" FOREIGN KEY ("post_mention_id") REFERENCES "PostMention"("id") ON DELETE SET NULL ON UPDATE CASCADE;
