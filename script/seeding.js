const dotenv = require("dotenv");
dotenv.config();
const { Pool } = require("pg");
const pool = new Pool();

const { faker } = require("@faker-js/faker");
faker.locale = "fr";

/*********************************************/
/************** Data Reset Before Seed ***************/
/*********************************************/

async function resetDB() {
  console.log("Start DB Reset");

  const sqlQuery = `TRUNCATE TABLE "company", "investor", "watchlist", "watchlist_has_company" RESTART IDENTITY CASCADE;`;

  await pool.query(sqlQuery);

  console.log("End DB Reset");
}
/*********************************************/
/*************** market *********************/
/*********************************************/

const market = require("./marketData");
console.log(market);

const allMarketData = [];
for (let counter = 0; counter < market.length; counter++) {
  const marketData = {
    name: market[counter % market.length].name,
    symbol: market[counter % market.length].symbol,
    logo: market[counter % market.length].logo,
  };
  allMarketData.push(marketData);
  console.log(allMarketData);
}

async function importMarketData() {
  console.time("Ajout Market data");

  let values = [];
  let parameters = [];
  let parameterCounter = 1;
  let requestCount = 0;

  for (const data of allMarketData) {
    // Ajouter l'utilisateur
    values.push(data.name);
    values.push(data.symbol);
    values.push(data.logo);

    parameters.push(
      `($${parameterCounter},$${parameterCounter + 1},$${parameterCounter + 2})`
    );
    parameterCounter += 3;
  }

  if (values.length > 0) {
    const sqlQuery = `INSERT INTO "companies_in_market" (name,symbol,logo) VALUES ${parameters.join()}`;
    await pool.query(sqlQuery, values);
    requestCount++;
  }

  console.log("Nombre de data : ", allMarketData.length);
  console.log("Nombre de requêtes : ", requestCount);
  console.timeEnd("Ajout Market data");
}

/*********************************************/
/*************** company *********************/
/*********************************************/

const companies = [];
for (let counter = 0; counter < 10; counter++) {
  const company = {
    name: faker.company.name(),
    symbol:
      faker.random.alpha().toUpperCase() +
      faker.random.alpha().toUpperCase() +
      faker.random.alpha().toUpperCase(),
    entryprice: faker.commerce.price(0, 1000),
  };

  // console.log(company);

  companies.push(company);
}

async function importDataCompanies() {
  console.time("Ajout des companies");

  let values = [];
  let parameters = [];
  let parameterCounter = 1;
  let requestCount = 0;

  for (const company of companies) {
    // Ajouter l'utilisateur
    values.push(company.name);
    values.push(company.symbol);
    values.push(company.entryprice);

    parameters.push(
      `($${parameterCounter},$${parameterCounter + 1},$${parameterCounter + 2})`
    );
    parameterCounter += 3;
  }

  if (values.length > 0) {
    const sqlQuery = `INSERT INTO "company" ("name", "symbol", "entryprice") VALUES ${parameters.join()}`;
    await pool.query(sqlQuery, values);
    requestCount++;
  }

  console.log("Nombre de companies : ", companies.length);
  console.log("Nombre de requêtes : ", requestCount);
  console.timeEnd("Ajout des companies");
}

/*********************************************/
/*************** investor *********************/
/*********************************************/

const investors = [];
for (let counter = 0; counter < 10; counter++) {
  const investor = {
    nickname: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    profilpicture: "public/images/none.png",
  };

  // console.log(investor);

  investors.push(investor);
}

async function importDataInvestor() {
  console.time("Ajout des investors");

  let values = [];
  let parameters = [];
  let parameterCounter = 1;
  let requestCount = 0;

  for (const investor of investors) {
    // Ajouter l'utilisateur
    values.push(investor.nickname);
    values.push(investor.email);
    values.push(investor.password);
    values.push(investor.profilpicture);

    parameters.push(
      `($${parameterCounter},$${parameterCounter + 1},$${
        parameterCounter + 2
      },$${parameterCounter + 3})`
    );
    parameterCounter += 4;
  }

  if (values.length > 0) {
    const sqlQuery = `INSERT INTO "investor" ("nickname", "email", "password","profilpicture") VALUES ${parameters.join()}`;
    await pool.query(sqlQuery, values);
    requestCount++;
  }

  console.log("Nombre de investors : ", investors.length);
  console.log("Nombre de requêtes : ", requestCount);
  console.timeEnd("Ajout des investors");
}

/*********************************************/
/*************** watchlist *********************/
/*********************************************/

const watchlists = [];
for (let counter = 0; counter < 20; counter++) {
  const watchlist = {
    name: faker.lorem.word(),
    investor_id: faker.datatype.number({
      min: 1,
      max: 10,
    }),
  };

  // console.log(watchlist);

  watchlists.push(watchlist);
}

async function importDataWatchlist() {
  console.time("Ajout des watchlists");

  let values = [];
  let parameters = [];
  let parameterCounter = 1;
  let requestCount = 0;

  for (const watchlist of watchlists) {
    // Ajouter l'utilisateur
    values.push(watchlist.name);
    values.push(watchlist.investor_id);

    parameters.push(`($${parameterCounter},$${parameterCounter + 1})`);
    parameterCounter += 2;
  }

  if (values.length > 0) {
    const sqlQuery = `INSERT INTO "watchlist" ("name", "investor_id") VALUES ${parameters.join()}`;
    await pool.query(sqlQuery, values);
    requestCount++;
  }

  console.log("Nombre de watchlists : ", watchlists.length);
  console.log("Nombre de requêtes : ", requestCount);
  console.timeEnd("Ajout des watchlists");
}

/*********************************************/
/********** watchlist_HAS_company ************/
/*********************************************/

const watchlistsHascompanies = [];
for (let counter = 0; counter < 20; counter++) {
  const watchlistsHascompany = {
    company_id: faker.datatype.number({
      min: 1,
      max: 10,
    }),
    watchlist_id: faker.datatype.number({
      min: 1,
      max: 20,
    }),
  };

  console.log(watchlistsHascompany);

  watchlistsHascompanies.push(watchlistsHascompany);
}

async function importDatawatchlistsHascompanies() {
  console.time("Ajout des watchlistsHascompanies");

  let values = [];
  let parameters = [];
  let parameterCounter = 1;
  let requestCount = 0;

  for (const watchlistsHascompany of watchlistsHascompanies) {
    // Ajouter l'utilisateur
    values.push(watchlistsHascompany.company_id);
    values.push(watchlistsHascompany.watchlist_id);

    parameters.push(`($${parameterCounter},$${parameterCounter + 1})`);
    parameterCounter += 2;
  }

  if (values.length > 0) {
    const sqlQuery = `INSERT INTO "watchlist_has_company" ("company_id", "watchlist_id") VALUES ${parameters.join()}`;
    await pool.query(sqlQuery, values);
    requestCount++;
  }

  console.log("Nombre de investors : ", watchlistsHascompanies.length);
  console.log("Nombre de requêtes : ", requestCount);
  console.timeEnd("Ajout des watchlistsHascompanies");
}

(async () => {
  await importMarketData();
  //   await resetDB();

  //   await importDataCompanies();
  //   await importDataInvestor();
  //   await importDataWatchlist();
  //   await importDatawatchlistsHascompanies();

  await pool.end();
  console.log("Script over");
})();
