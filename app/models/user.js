const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class User extends Model { }

User.init({
    nickname: { 
        type: DataTypes.STRING,
        allowNull : false
    },
    email: { 
        type: DataTypes.STRING,
        allowNull : false
    },
    password: {
        type: DataTypes.STRING,
        allowNull : false,
        field: "list_id"
    }
}, {
    sequelize,
    tableName : "user",
    modelName : "User"
});

module.exports = User;