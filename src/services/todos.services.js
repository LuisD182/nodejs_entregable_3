const ToDos = require("../modules/todos.modules");


class ToDosServices {
    static async createATask(bodyTask){
        try {
            const aNewTask = await ToDos.create(bodyTask);
            return aNewTask
        } catch (error) {
            throw error
        }
    }
}

module.exports = ToDosServices;