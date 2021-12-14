-- CreateTable
CREATE TABLE "PostReaction" (
    "id" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "emojiUnicode" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "acterId" TEXT NOT NULL,
    "createdByUserId" TEXT NOT NULL,

    CONSTRAINT "PostReaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "onPost" ON "PostReaction"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "PostReaction_emojiUnicode_postId_acterId_key" ON "PostReaction"("emojiUnicode", "postId", "acterId");

-- AddForeignKey
ALTER TABLE "PostReaction" ADD CONSTRAINT "PostReaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostReaction" ADD CONSTRAINT "PostReaction_acterId_fkey" FOREIGN KEY ("acterId") REFERENCES "acters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostReaction" ADD CONSTRAINT "PostReaction_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
