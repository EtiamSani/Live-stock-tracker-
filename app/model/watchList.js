const CoreDatamapper = require('./CoreDatamapper');
const client = require('../db/pg');

class WatchList extends CoreDatamapper {
    tableName = 'watch_list';

    async findByInvestor(id) {
        const preparedQuery = {
            text: `SELECT w.name FROM watch_list w
            JOIN investor i ON i.id = w.investor_id
            WHERE i.id = $1`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async findByCompany(id) {
        const preparedQuery = {
            text: `SELECT c.name AS company_name, w.name AS watchlist_name
            FROM watch_list w
            JOIN watchlist_has_company whc ON w.id = whc.watchlist_id
            JOIN company c ON whc.company_id = c.id
            WHERE c.id = 1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    async findCompanyInWatchlist(id) {
        const preparedQuery = {
            text: `SELECT c.name, c.symbol, w.name AS watchlist_name
            FROM watch_list w
            JOIN watchlist_has_company whc ON w.id = whc.watchlist_id
            JOIN company c ON whc.company_id = c.id
            WHERE w.id = $1;`,
            values: [id],
        };

        const result = await this.client.query(preparedQuery);

        return result.rows;
    }

    // async creatWatchListWithInvestorId(id) {
    //     const preparedQuery = {
    //         text: `INSERT INTO watch_list(
    //             name, investor_id)
    //             VALUES (?, ?);`,
    //         values: [id],
    //     };

    //     const result = await this.client.query(preparedQuery);

    //     return result.rows;
    // }


}

module.exports = new WatchList(client);