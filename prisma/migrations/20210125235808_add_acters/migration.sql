/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[acter_id]` on the table `users`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "acter_id" TEXT;

-- CreateTable
CREATE TABLE "acters" (
    "id" TEXT NOT NULL,
    "acter_type_id" TEXT NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "location" TEXT,
    "location_lat" DECIMAL(65,30),
    "location_lng" DECIMAL(65,30),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "acter_user_id" TEXT,
    "acter_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acter_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acter_type_rules" (
    "id" TEXT NOT NULL,
    "can_create" BOOLEAN NOT NULL,
    "can_join" BOOLEAN NOT NULL,
    "subject_acter_type_id" TEXT NOT NULL,
    "oubject_acter_type_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_acter_follows" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "acters.slug_unique" ON "acters"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "acter_types.name_unique" ON "acter_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_acter_follows_AB_unique" ON "_acter_follows"("A", "B");

-- CreateIndex
CREATE INDEX "_acter_follows_B_index" ON "_acter_follows"("B");

-- CreateIndex
CREATE UNIQUE INDEX "users_acter_id_unique" ON "users"("acter_id");

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD FOREIGN KEY ("subject_acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD FOREIGN KEY ("oubject_acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_acter_follows" ADD FOREIGN KEY ("A") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_acter_follows" ADD FOREIGN KEY ("B") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
