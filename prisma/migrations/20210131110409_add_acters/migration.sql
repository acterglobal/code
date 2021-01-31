/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[acterId]` on the table `users`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "acterId" TEXT;

-- CreateTable
CREATE TABLE "acters" (
    "id" TEXT NOT NULL,
    "acter_type_id" TEXT NOT NULL,
    "name" TEXT,
    "slug" TEXT,
    "description" TEXT,
    "location" TEXT,
    "location_lat" DECIMAL(65,30),
    "location_lng" DECIMAL(65,30),
    "auto_approve_followers" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "parent_acter_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acter_connections" (
    "id" TEXT NOT NULL,
    "is_approved" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "follower_acter_id" TEXT NOT NULL,
    "following_acter_id" TEXT NOT NULL,

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
    "can_create" BOOLEAN NOT NULL DEFAULT false,
    "can_join" BOOLEAN NOT NULL DEFAULT false,
    "can_become" BOOLEAN NOT NULL DEFAULT false,
    "subject_acter_type_id" TEXT NOT NULL,
    "object_acter_type_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "slug_unique_for_acter_type" ON "acters"("slug", "acter_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "acter_types.name_unique" ON "acter_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subject_object_acter_type_ids" ON "acter_type_rules"("subject_acter_type_id", "object_acter_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_acterId_unique" ON "users"("acterId");

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acters" ADD FOREIGN KEY ("parent_acter_id") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD FOREIGN KEY ("follower_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_connections" ADD FOREIGN KEY ("following_acter_id") REFERENCES "acters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD FOREIGN KEY ("subject_acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acter_type_rules" ADD FOREIGN KEY ("object_acter_type_id") REFERENCES "acter_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("acterId") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
