DROP TABLE IF EXISTS "watch_list_company", "company", "user_watchlist", "user", "watch_list"; 

CREATE TABLE "company" 
(
    "code_company" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(10) NOT NULL,
    "entry_price" DECIMAL(10, 2) NULL, 
    "logo" BLOB NULL

);

CREATE TABLE "user" 
(
    "code_user" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nickname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL
);


CREATE TABLE "watch_list" 
(
    "code_list" INTEGER GENERATED always AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,   
);

CREATE TABLE "watch_list_company"
(
    "company_id" INTEGER NOT NULL,
    "list_id" INTEGER NOT NULL,
    PRIMARY KEY ("company_id", "list_id"),
    CONSTRAINT "fk_watchlistcompany_company" FOREIGN KEY ("company_id") REFERENCES "company"("code_company") ON DELETE CASCADE,
    CONSTRAINT "fk_watchlistcompany_list" FOREIGN KEY ("list_id") REFERENCES "watch_list"("code_list") ON DELETE CASCADE
);

CREATE TABLE "user_watchlist" 
(
    "list_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    PRIMARY KEY ("list_id", "user_id"),
    CONSTRAINT "fk_userwatchlist_list" FOREIGN KEY ("list_id") REFERENCES "watch_list"("code_list") ON DELETE CASCADE,
    CONSTRAINT "fk_userwatchlist_user" FOREIGN KEY ("user_id") REFERENCES "user"("code_user") ON DELETE CASCADE
);

--seeding 

