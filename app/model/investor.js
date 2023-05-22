const CoreDatamapper = require("./CoreDatamapper");
const client = require("../db/pg");
const errors = require("../modules/errors");

class Investor extends CoreDatamapper {
  tableName = "investor";

  async findByEmail(email) {
    const preparedQuery = {
      text: `SELECT * FROM investor i WHERE i.email = $1`,
      values: [email],
    };
    try {
      const result = await this.client.query(preparedQuery);
      return result.rows[0];
    } catch (err) {
      errors.error500(err, "Base de données");
    }
  }
}

module.exports = new Investor(client);
