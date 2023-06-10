const CoreDatamapper = require("./CoreDatamapper");
const client = require("../db/pg");
const errors = require("../modules/errors");

class CompaniesInMarket extends CoreDatamapper {
  tableName = "companies_in_market";

  async findByCaracter(symbol) {
    const preparedQuery = {
      text: `SELECT name,symbol,logo FROM companies_in_market cim WHERE cim.name LIKE $1`,
      values: [`%${symbol}%`],
    };
    try {
      const result = await this.client.query(preparedQuery);
      return result.rows;
    } catch (err) {
      errors.error500(err, "Base de données");
    }
  }
}

module.exports = new CompaniesInMarket(client);
