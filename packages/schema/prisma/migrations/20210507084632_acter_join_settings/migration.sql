-- CreateEnum
CREATE TYPE "ActerJoinSettings" AS ENUM ('EVERYONE', 'RESTRICTED', 'INVITE_ONLY');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "user_join_setting" "ActerJoinSettings" NOT NULL DEFAULT E'EVERYONE';
