const CoreDatamapper = require('./CoreDatamapper');
const client = require('../db/pg');

class Company extends CoreDatamapper {
    tableName = 'company';

    async findByWatchlist(id) {
        const preparedQuery = {
            text: `SELECT w.id, w.name
            FROM company c
            JOIN watchlist_has_company whc ON c.id = whc.company_id
            JOIN watch_list w ON w.id = whc.watchlist_id
            WHERE c.id = 1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async findCompanyBySymbol(symbol) {
        const preparedQuery = {
            text: `SELECT c.name, c.id
            FROM company c
            JOIN watchlist_has_company whc ON c.id = whc.company_id
            JOIN watch_list w ON w.id = whc.watchlist_id
            WHERE c.symbol = $1;`,
            values: [symbol],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

}

module.exports = new Company(client);