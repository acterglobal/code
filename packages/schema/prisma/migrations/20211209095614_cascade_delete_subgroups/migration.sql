-- DropForeignKey
ALTER TABLE "acters" DROP CONSTRAINT "acters_parent_acter_id_fkey";

-- AddForeignKey
ALTER TABLE "acters" ADD CONSTRAINT "acters_parent_acter_id_fkey" FOREIGN KEY ("parent_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
