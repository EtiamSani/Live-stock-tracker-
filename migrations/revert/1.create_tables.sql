-- Revert stocktracker:1.create_tables from pg

BEGIN;


DROP TABLE "company","watch_list","watchlist_has_company","investor";

DROP DOMAIN "positif", "email";

COMMIT;
