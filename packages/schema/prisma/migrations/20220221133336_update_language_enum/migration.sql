/*
  Warnings:

  - The values [EN,DK] on the enum `Language` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Language_new" AS ENUM ('en_UK', 'da_DK');
ALTER TABLE "users" ALTER COLUMN "language" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "language" TYPE "Language_new" USING ("language"::text::"Language_new");
ALTER TYPE "Language" RENAME TO "Language_old";
ALTER TYPE "Language_new" RENAME TO "Language";
DROP TYPE "Language_old";
ALTER TABLE "users" ALTER COLUMN "language" SET DEFAULT 'en_UK';
COMMIT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "language" SET DEFAULT E'en_UK';
