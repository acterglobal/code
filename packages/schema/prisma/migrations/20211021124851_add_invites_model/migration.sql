-- CreateTable
CREATE TABLE "invites" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "error" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "sent_at" TIMESTAMP(3) NOT NULL,
    "accepted_at" TIMESTAMP(3) NOT NULL,
    "on_acter_id" TEXT NOT NULL,
    "created_by_user_id" TEXT NOT NULL,

    CONSTRAINT "invites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "inviteEmailForActer" ON "invites"("on_acter_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "invites_on_acter_id_email_key" ON "invites"("on_acter_id", "email");

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_on_acter_id_fkey" FOREIGN KEY ("on_acter_id") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "users_acterId_unique" RENAME TO "users_acterId_key";
