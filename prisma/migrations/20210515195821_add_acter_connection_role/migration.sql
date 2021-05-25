-- CreateEnum
CREATE TYPE "ActerConnectionRole" AS ENUM ('PENDING', 'MEMBER', 'ADMIN');

-- AlterTable
ALTER TABLE "acter_connections" ADD COLUMN     "role" "ActerConnectionRole" NOT NULL DEFAULT E'MEMBER';

-- Set creating UserActer as initial admin
UPDATE "acter_connections" SET "role"='ADMIN' WHERE "id" IN (
  SELECT 
    "ac"."id"
  FROM "acter_connections" AS "ac"
  JOIN "acters" AS "follower" ON "ac"."follower_acter_id" = "follower"."id"
  JOIN "users" ON "users"."id" = "follower"."created_by_user_id"
  JOIN "acters" AS "following" ON "ac"."following_acter_id" = "following"."id"
  WHERE "users"."id" = "following"."created_by_user_id"
)
