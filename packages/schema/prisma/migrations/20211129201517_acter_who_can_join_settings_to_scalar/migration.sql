/*
  Warnings:

  - The values [USERS] on the enum `ActerWhoCanJoinSettings` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActerWhoCanJoinSettings_new" AS ENUM ('PEOPLE', 'ACTERS');
ALTER TABLE "acters" ALTER COLUMN "acter_who_can_join_settings" TYPE "ActerWhoCanJoinSettings_new"[] USING ("acter_who_can_join_settings"::text::"ActerWhoCanJoinSettings_new"[]);
ALTER TYPE "ActerWhoCanJoinSettings" RENAME TO "ActerWhoCanJoinSettings_old";
ALTER TYPE "ActerWhoCanJoinSettings_new" RENAME TO "ActerWhoCanJoinSettings";
DROP TYPE "ActerWhoCanJoinSettings_old";
COMMIT;
