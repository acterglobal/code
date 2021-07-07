-- AlterTable
ALTER TABLE "acters" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_user_id" TEXT;

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("deleted_by_user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

