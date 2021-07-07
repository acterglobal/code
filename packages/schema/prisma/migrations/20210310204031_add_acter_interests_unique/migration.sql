/*
 Warnings:
 
 - The migration will add a unique constraint covering the columns `[acterId,interestId]` on the table `acter_interests`. If there are existing duplicate values, the migration will fail.
 
 */
-- CreateIndex
CREATE UNIQUE INDEX "acter_interests_unique" ON "acter_interests"("acterId", "interestId");

-- CreateIndex
CREATE INDEX "interest_types.sort_order_index" ON "interest_types"("sort_order");