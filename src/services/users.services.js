const Users = require('../modules/users.modules');

class UserServices {
    static async createNewUser (bodyNewUser){
        try {
            const aNewUser = await Users.create(bodyNewUser)
            return aNewUser
        } catch (error) {
            throw(error)
        }
    }

    static async getAllTheUsers (){
        try {
            const allUsers = await Users.findAll()
            return allUsers
        } catch (error) {
            throw error
        }
    }

}

module.exports = UserServices;