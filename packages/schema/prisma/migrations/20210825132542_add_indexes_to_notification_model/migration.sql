-- CreateIndex
CREATE INDEX "notifications.to_acter_id_viewed_at_index" ON "notifications"("to_acter_id", "viewed_at");

-- CreateIndex
CREATE INDEX "notifications.on_acter_id_to_acter_id_type_index" ON "notifications"("on_acter_id", "to_acter_id", "type");
