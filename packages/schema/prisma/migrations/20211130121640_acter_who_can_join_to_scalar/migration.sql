/*
  Warnings:

  - The values [USERS] on the enum `ActerWhoCanJoinSettings` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActerWhoCanJoinSettings_new" AS ENUM ('ALL', 'PEOPLE', 'ACTERS');
ALTER TABLE "acters" ALTER COLUMN "acter_who_can_join_setting" DROP DEFAULT;
ALTER TABLE "acters" ALTER COLUMN "acter_who_can_join_setting" TYPE "ActerWhoCanJoinSettings_new" USING ("acter_who_can_join_setting"::text::"ActerWhoCanJoinSettings_new");
ALTER TYPE "ActerWhoCanJoinSettings" RENAME TO "ActerWhoCanJoinSettings_old";
ALTER TYPE "ActerWhoCanJoinSettings_new" RENAME TO "ActerWhoCanJoinSettings";
DROP TYPE "ActerWhoCanJoinSettings_old";
ALTER TABLE "acters" ALTER COLUMN "acter_who_can_join_setting" SET DEFAULT 'ACTERS';
COMMIT;
