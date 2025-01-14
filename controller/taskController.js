const { findTaskByTitleInDB, createANewTaskInDB } = require("../repositories/taskRepository")
const { setResponseBody } = require("../utils/responseFormatter")

const createTask = async (request, response) => {
    const taskData = request.body
    try {
        const existingTask = await findTaskByTitleInDB(taskData.title)
        if(existingTask) {
            return response.status(409).send(setResponseBody("Task already exist with same title", "conflict", null))
        }

        const newTask = await createANewTaskInDB(taskData) 

        response.status(201).send(setResponseBody("Task created successfully", null, newTask))
    }
    catch (error) {
        response.status(500).send(setResponseBody(error.message, 'server_error', null))
    }
}

module.exports = {
    createTask
}