-- CreateEnum
CREATE TYPE "Language" AS ENUM ('en_GB', 'da_DK');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "language" "Language" NOT NULL DEFAULT E'en_GB';
