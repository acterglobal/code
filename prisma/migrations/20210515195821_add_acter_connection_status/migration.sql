-- CreateEnum
CREATE TYPE "ActerConnectionStatus" AS ENUM ('PENDING', 'MEMBER', 'ADMIN');

-- AlterTable
ALTER TABLE "acter_connections" ADD COLUMN     "status" "ActerConnectionStatus" NOT NULL DEFAULT E'MEMBER';
