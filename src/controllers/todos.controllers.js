const ToDosServices = require("../services/todos.services");

const creatingATask = async (req, res)=>{
    try {
        const bodyTask = req.body;
        const taskCreated = await ToDosServices.createATask(bodyTask)
        res.status(201).json(taskCreated)
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = {
    creatingATask
}