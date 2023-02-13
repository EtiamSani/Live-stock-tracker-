const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const Company = require('./company');
const Watch_list = require('./watch_list');


class Watch_listCompany extends Model { }

Watch_listCompany.init({
    company_id: { 
        type: DataTypes.INTEGER,
        field: 'company_id',
        references : { 
            model: Company,
            key : 'code_company'
        }
    },
    list_id: { 
        type: DataTypes.INTEGER,
        field: 'list_id',
        references : { 
            model: Watch_list,
            key : 'code_list'
        }
    },
}, {
    sequelize,
    tableName : "watch_list_company",
    timestamps: false
});

module.exports = Watch_listCompany;