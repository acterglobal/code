/*
  Warnings:

  - The values [MENTIONS] on the enum `ActerNotificationSettings` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ActerNotificationSettings_new" AS ENUM ('ALL_ACTIVITY', 'NONE');
ALTER TABLE "acters" ALTER COLUMN "acter_notify_setting" DROP DEFAULT;
ALTER TABLE "acters" ALTER COLUMN "acter_notify_setting" TYPE "ActerNotificationSettings_new" USING ("acter_notify_setting"::text::"ActerNotificationSettings_new");
ALTER TYPE "ActerNotificationSettings" RENAME TO "ActerNotificationSettings_old";
ALTER TYPE "ActerNotificationSettings_new" RENAME TO "ActerNotificationSettings";
DROP TYPE "ActerNotificationSettings_old";
ALTER TABLE "acters" ALTER COLUMN "acter_notify_setting" SET DEFAULT 'NONE';
COMMIT;
