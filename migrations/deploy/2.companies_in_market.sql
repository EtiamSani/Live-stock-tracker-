-- Deploy stocktracker:2.companies_in_market to pg

BEGIN;

CREATE TABLE "companies_in_market" 
(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NULL,
    "symbol" TEXT NULL,
    "logo" TEXT NULL
);

CREATE INDEX "market_data" ON "companies_in_market" ("name","symbol");

ALTER TABLE "company" ADD COLUMN "logo" TEXT NULL;

COMMIT;
