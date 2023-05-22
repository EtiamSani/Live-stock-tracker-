const CoreDatamapper = require("./CoreDatamapper");
const client = require("../db/pg");

class WatchListHasCompany extends CoreDatamapper {
  tableName = "watchlist_has_company";

  async findByWatchlist(id) {
    const preparedQuery = {
      text: `SELECT w.name FROM watch_list w
            JOIN investor i ON i.id = w.investor_id
            WHERE i.nickname = $1`,
      values: [id],
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async findByCompany(id) {
    const preparedQuery = {
      text: `SELECT w.name FROM watch_list w
            JOIN company c ON c.id = p.category_id
            WHERE c.label = $1`,
      values: [id],
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async addCompanyToWatchlist({ companyId, watchlistId }) {
    const preparedQuery = {
      text: `INSERT INTO watchlist_has_company (company_id, watchlist_id)
            VALUES ($1,$2)
            RETURNING * ;`,
      values: [companyId, watchlistId],
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async deleteCompanyToWatchlist({ companyId, watchlistId }) {
    const preparedQuery = {
      text: `DELETE FROM watchlist_has_company WHERE company_id = $1 AND watchlist_id = $2
            RETURNING * ;`,
      values: [companyId, watchlistId],
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }

  async deleteWithCompanies(listId) {
    const preparedQuery = {
      text: `DELETE FROM watchlist_has_company WHERE watchlist_id = $1
            RETURNING * ;`,
      values: [listId],
    };

    const result = await this.client.query(preparedQuery);

    return result.rows;
  }
}

module.exports = new WatchListHasCompany(client);
