const UserServices = require("../services/users.services");


const creatingNewUser = async (req, res)=>{
    try {
       const bodyUser = req.body;
       const createdUser= await UserServices.createNewUser(bodyUser)
       res.status(201).json(createdUser)
    } catch (error) {
        res.status(400).json(error)
    }
}


const gettinAllUsers = async (req, res)=>{
    try {
        const getAllUses = await UserServices.getAllTheUsers()
        res.status(200).json(getAllUses)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    creatingNewUser,
    gettinAllUsers
}