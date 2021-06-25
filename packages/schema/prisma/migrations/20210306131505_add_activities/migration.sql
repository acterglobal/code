-- CreateTable
CREATE TABLE "activities" (
    "id" TEXT NOT NULL,
    "start_at" TIMESTAMP(3) NOT NULL,
    "end_at" TIMESTAMP(3) NOT NULL,
    "is_online" BOOLEAN NOT NULL,
    "created_by_user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "acter_id" TEXT,
    "organiser_id" TEXT,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "activities_acter_id_unique" ON "activities"("acter_id");

-- AddForeignKey
ALTER TABLE "activities" ADD FOREIGN KEY ("created_by_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD FOREIGN KEY ("acter_id") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD FOREIGN KEY ("organiser_id") REFERENCES "acters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
