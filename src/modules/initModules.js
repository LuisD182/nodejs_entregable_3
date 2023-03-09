const Categories = require('./categories.modules');
const ToDos = require('./todos.modules');
const Users = require('./users.modules');



const initModels = ()=>{
    Users.hasMany(ToDos, {foreignKey: "id" })
    ToDos.belongsTo(Users, {foreignKey: "id"})

    Categories.hasMany(ToDos, {foreignKey: "categoryId"})
    ToDos.belongsTo(Categories, {foreignKey: "categoryId"})
 
}

module.exports = initModels