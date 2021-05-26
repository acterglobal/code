-- CreateEnum
CREATE TYPE "ActerNotificationSettings" AS ENUM ('ALL_ACTIVITY', 'MENTIONS', 'NONE');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "acter_notify_setting" "ActerNotificationSettings" NOT NULL DEFAULT E'NONE';
