const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Watch_list extends Model { }

Watch_list.init({
    code_list: {
        type: DataTypes.INTEGER,
        primaryKey : true,

    },
    name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    }, {
        sequelize,
        tableName : "watch_list",
        modelName : "Watch_list",
        timestamps: false,
    });

module.exports = Watch_list;