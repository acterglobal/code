-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN', 'DK');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "language" "Language" NOT NULL DEFAULT E'EN';
