/*
  Warnings:

  - You are about to alter the column `location_lat` on the `acters` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `location_lng` on the `acters` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "acters" ALTER COLUMN "location_lat" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "location_lng" SET DATA TYPE DOUBLE PRECISION;
