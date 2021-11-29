-- CreateEnum
CREATE TYPE "ActerWhoCanJoinSettings" AS ENUM ('ALL', 'PEOPLE', 'ACTERS');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "acter_who_can_join_setting" "ActerWhoCanJoinSettings" NOT NULL DEFAULT E'ACTERS';

-- DropEnum
DROP TYPE "ActerWhoCanJoinSetting";
