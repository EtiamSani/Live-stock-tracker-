const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const User = require('./user');
const Watch_list = require('./watch_list');


class UserWatchlist extends Model { }

UserWatchlist.init({
    list_id: { 
        type: DataTypes.INTEGER,
        field: 'list_id',
        references : { 
            model: Watch_list,
            key : 'id'
        }
    },
    user_id: { 
        type: DataTypes.INTEGER,
        field: 'user_id',
        references : { 
            model: User,
            key : 'id'
        }
    },
}, {
    sequelize,
    tableName : "watch_list",
    modelName : "Watch_list"
});

module.exports = UserWatchlist;