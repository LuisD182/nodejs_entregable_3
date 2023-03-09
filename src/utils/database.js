const { Sequelize } = require('sequelize');
const myDataBase = new Sequelize ({
    database: "entregable_3",
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'ruut',
    dialect: 'postgres'
})

module.exports = myDataBase;