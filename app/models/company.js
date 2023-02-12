const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Company extends Model { }

Company.init({
    name: { 
        type: DataTypes.STRING,
        allowNull : false
    },
    symbol: { 
        type: DataTypes.STRING,
        allowNull : false
    },
    entry_price: {
        type: DataTypes.FLOAT,
        allowNull : true,
    },
    logo : {
        type: DataTypes.BLOB,
        allowNull : true,
    }
}, {
    sequelize,
    tableName : "company",
    modelName : "Company"
});

module.exports = Company;