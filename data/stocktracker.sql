--DROP
DROP TABLE IF EXISTS "watch_list_company", "company", "user_watchlist", "user", "watch_list"; 

--CREATE TABLES
CREATE TABLE "company" 
(
    "code_company" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "symbol" VARCHAR(10) NOT NULL,
    "entry_price" NUMERIC(10, 2) NULL, 
    "logo" BYTEA NULL
);

CREATE TABLE "user" 
(
    "code_user" SERIAL PRIMARY KEY,
    "nickname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL
);


CREATE TABLE "watch_list" 
(
    "code_list" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()   
);

CREATE TABLE "watch_list_company"
(
    "company_id" INTEGER NOT NULL,
    "list_id" INTEGER NOT NULL,
    PRIMARY KEY ("company_id", "list_id"),
    FOREIGN KEY ("company_id") REFERENCES "company"("code_company") ON DELETE CASCADE,
    FOREIGN KEY ("list_id") REFERENCES "watch_list"("code_list") ON DELETE CASCADE
);

CREATE TABLE "user_watchlist" 
(
    "list_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    PRIMARY KEY ("list_id", "user_id"),
    FOREIGN KEY ("list_id") REFERENCES "watch_list"("code_list") ON DELETE CASCADE,
    FOREIGN KEY ("user_id") REFERENCES "user"("code_user") ON DELETE CASCADE
);

--SEEDING 

INSERT INTO "company" ("name","symbol","entry_price","logo" ) VALUES ('Align Technology', 'ALGN', 41.78, NULL);

INSERT INTO "user" ("nickname","email","password" ) VALUES ('JsonStatham', 'json@json.com', '123');

INSERT INTO "watch_list" ("name") VALUES ('Quality stocks');

INSERT INTO "watch_list_company" ("company_id","list_id") VALUES (1,1);

INSERT INTO "user_watchlist" ("list_id","user_id") VALUES (1,1);
