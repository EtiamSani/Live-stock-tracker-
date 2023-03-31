const CoreDatamapper = require('./CoreDatamapper');
const client = require('../db/pg');

class Investor extends CoreDatamapper {
    tableName = 'investor';

    async validateLogin(email,password){
        let user;
        try{
            const sqlQuery = `
                SELECT  i.id,firstname,lastname,role.label as "role"
                FROM "investor" i
                LEFT JOIN "role" ON role.id = u.role_id
                WHERE email=$1 AND password=$2`;
            const response = await client.query(sqlQuery,[email,password]);
            user = response.rows[0];
        }
        catch(error){
            console.error(error);
        }

        return user;
    }
}

module.exports = new Investor(client);