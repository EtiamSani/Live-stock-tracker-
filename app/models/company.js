const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Company extends Model { }

Company.init({
    code_company: { 
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
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
    modelName : "Company",
    timestamps : false
    
});


module.exports = Company;