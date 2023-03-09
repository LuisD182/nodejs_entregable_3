const { DataTypes } = require('sequelize');
const myDataBase = require('../utils/database');

const Categories = myDataBase.define('categories', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},
{timestamps: false}
) 

module.exports = Categories