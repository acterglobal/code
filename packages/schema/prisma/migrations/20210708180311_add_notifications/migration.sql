-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('NEW_POST', 'NEW_ACTIVITY', 'NEW_MEMBER');
-- CreateTable
CREATE TABLE "notifications" (
  "id" TEXT NOT NULL,
  "type" "NotificationType" NOT NULL,
  "url" TEXT NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  "send_to" TEXT,
  "sent_at" TIMESTAMP(3),
  "viewed_at" TIMESTAMP(3),
  "to_acter_id" TEXT NOT NULL,
  "on_acter_id" TEXT NOT NULL,
  PRIMARY KEY ("id")
);
-- AddForeignKey
ALTER TABLE
  "notifications"
ADD
  FOREIGN KEY ("to_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE
  "notifications"
ADD
  FOREIGN KEY ("on_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;