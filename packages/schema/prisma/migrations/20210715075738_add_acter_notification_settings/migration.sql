-- CreateEnum
CREATE TYPE "ActerNotificationSettings" AS ENUM ('ALL_ACTIVITY', 'NONE');

-- CreateEnum
CREATE TYPE "ActerNotificationEmailFrequency" AS ENUM ('NEVER', 'DAILY', 'INSTANT');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "acter_notify_email_frequency" "ActerNotificationEmailFrequency" NOT NULL DEFAULT E'NEVER',
ADD COLUMN     "acter_notify_setting" "ActerNotificationSettings" NOT NULL DEFAULT E'NONE';
