/*
  Warnings:

  - Added the required column `activityTypeId` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activities" ADD COLUMN     "activityTypeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "activity_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "activity_types.name_unique" ON "activity_types"("name");

-- AddForeignKey
ALTER TABLE "activities" ADD FOREIGN KEY ("activityTypeId") REFERENCES "activity_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
