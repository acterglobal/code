/*
  Warnings:

  - A unique constraint covering the columns `[on_acter_id,email,expired_at]` on the table `invites` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "invites_on_acter_id_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "invites_on_acter_id_email_expired_at_key" ON "invites"("on_acter_id", "email", ("expired_at" IS NULL)) WHERE "expired_at" IS NULL;

UPDATE "invites" SET "expired_at"="accepted_at" WHERE "accepted_at" IS NOT NULL AND "expired_at" IS NULL;
