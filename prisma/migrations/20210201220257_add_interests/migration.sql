-- CreateTable
CREATE TABLE "interests" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "interest_type_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interest_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parent_interest_type_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nameUniqueForInterestType" ON "interests"("interest_type_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "nameUniqueForParentInterestType" ON "interest_types"("parent_interest_type_id", "name");

-- AddForeignKey
ALTER TABLE "interests" ADD FOREIGN KEY ("interest_type_id") REFERENCES "interest_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interest_types" ADD FOREIGN KEY ("parent_interest_type_id") REFERENCES "interest_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
