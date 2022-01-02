-- CreateEnum
CREATE TYPE "ActerLanguageSettings" AS ENUM ('EN', 'DK');

-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "acter_language_setting" "ActerLanguageSettings" NOT NULL DEFAULT E'EN',
ALTER COLUMN "acter_notify_email_frequency" SET DEFAULT E'INSTANT';
