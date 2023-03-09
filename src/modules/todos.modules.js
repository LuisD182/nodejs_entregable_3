const {DataTypes} = require('sequelize');
const myDataBase = require('../utils/database')

const ToDos = myDataBase.define( "toDos", { 
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = ToDos