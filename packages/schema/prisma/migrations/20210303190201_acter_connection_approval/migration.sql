-- AlterTable
ALTER TABLE "acter_connections" ALTER COLUMN "is_approved" DROP NOT NULL,
ALTER COLUMN "is_approved" SET DEFAULT true;
