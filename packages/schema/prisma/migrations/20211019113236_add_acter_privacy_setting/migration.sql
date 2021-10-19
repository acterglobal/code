-- CreateEnum
CREATE TYPE "ActerPrivacySettings" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "acter_privacy_setting" "ActerPrivacySettings" NOT NULL DEFAULT E'PUBLIC';
