/*
  Warnings:

  - You are about to drop the column `use_admins` on the `acters` table. All the data in the column will be lost.
  - You are about to drop the `acter_type_rules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "acter_type_rules" DROP CONSTRAINT "acter_type_rules_object_acter_type_id_fkey";

-- DropForeignKey
ALTER TABLE "acter_type_rules" DROP CONSTRAINT "acter_type_rules_subject_acter_type_id_fkey";

-- AlterTable
ALTER TABLE "acters" DROP COLUMN "use_admins";

-- DropTable
DROP TABLE "acter_type_rules";
