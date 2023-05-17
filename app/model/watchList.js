const CoreDatamapper = require('./CoreDatamapper');
const client = require('../db/pg');

class WatchList extends CoreDatamapper {
    tableName = 'watchlist';

    async findByCompany(id) {
        const preparedQuery = {
            text: `SELECT c.name AS company_name, w.name AS watchlist_name
            FROM watch_list w
            JOIN watchlist_has_company whc ON w.id = whc.watchlist_id
            JOIN company c ON whc.company_id = c.id
            WHERE c.id = $1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async findCompaniesInWatchlist(id) {
        const preparedQuery = {
            text: `SELECT c.name, c.symbol, c.name
            FROM company c 
			JOIN watchlist_has_company whc ON whc.company_id = c.id 
			JOIN watchlist w ON w.id = whc.watchlist_id
            WHERE w.id = $1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async addCompanyToWatchlist({watchlistId,companyId}) {
        const preparedQuery = {
            text: `INSERT INTO watchlist_has_company (watchlist_id, company_id)
            VALUES ($1,$2)`,
            values: [watchlistId,companyId],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async findAllWatchlistOfAnInvestor(id) {
        const preparedQuery = {
            text: `SELECT  w.name, w.id
            FROM watchlist w 
			JOIN investor i ON i.id = w.investor_id
            WHERE i.id = $1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }


}

module.exports = new WatchList(client);