-- CreateTable
CREATE TABLE "activity_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "activity_types.name_unique" ON "activity_types"("name");

-- We need this to set the foreign key. The seed process should remove this
INSERT INTO "activity_types"("id", "name") VALUES ('dummy', 'dummy');

-- AlterTable
ALTER TABLE "activities" ADD COLUMN "activityTypeId" TEXT NOT NULL DEFAULT 'dummy';

-- AddForeignKey
ALTER TABLE "activities" ADD FOREIGN KEY ("activityTypeId") REFERENCES "activity_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;
