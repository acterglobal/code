/*
 Warnings:
 
 - The migration will add a unique constraint covering the columns `[acter_id]` on the table `users`. If there are existing duplicate values, the migration will fail.
 
 */
-- AlterTable
ALTER TABLE
    "users"
ADD
    COLUMN "acter_id" TEXT;

-- CreateTable
CREATE TABLE "acters" (
    "id" TEXT NOT NULL,
    "acter_type_id" TEXT NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "location" TEXT,
    "location_lat" DECIMAL(65, 30),
    "location_lng" DECIMAL(65, 30),
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acter_connections" (
    "id" TEXT NOT NULL,
    "parent_acter_id" TEXT NOT NULL,
    "connection_acter_id" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acter_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "acters.slug_unique" ON "acters"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "acter_connections_parent_acter_id_unique" ON "acter_connections"("parent_acter_id");

-- CreateIndex
CREATE UNIQUE INDEX "acter_types_name_unique" ON "acter_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_acter_id_unique" ON "users"("acter_id");

-- AddForeignKey
ALTER TABLE
    "acters"
ADD
    FOREIGN KEY("acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "acter_connections"
ADD
    FOREIGN KEY("parent_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "acter_connections"
ADD
    FOREIGN KEY("connection_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
    "users"
ADD
    FOREIGN KEY("acter_id") REFERENCES "acters"("id") ON DELETE
SET
    NULL ON UPDATE CASCADE;