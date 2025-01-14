const { default: mongoose } = require("mongoose")
const { findTaskByTitleInDB, createANewTaskInDB, getAllTasksFromDB, getTaskByIdFromDB, editTaskInDB } = require("../repositories/taskRepository")
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

const getAllTasks = async (request, response) => {
    
    try{
        const tasks = await getAllTasksFromDB()

        response.status(200).send(setResponseBody("All tasks fetched", null, tasks))
    }
    catch(error) {
        response.status(500).send(setResponseBody(error.message, 'server_error', null))
    }
}

const getTaskById = async (request, response) => {
    const { id } = request.params 
    try{
        if (!mongoose.isValidObjectId(id)) {
            return response.status(400).send(setResponseBody("Invalid task ID", "invalid_request", null))
        }

        const task = await getTaskByIdFromDB(id)
        if(!task) {
            return response.status(404).send(setResponseBody("Task not found", "not_found", null))
        }

        response.status(200).send(setResponseBody("Task fetched", null, task))
    }
    catch(error) {
        response.status(500).send(setResponseBody(error.message, 'server_error', null))
    }
}

const editTask = async (request, response) => {
    const { id } = request.params
    const taskData = request.body
    try {

        if (!mongoose.isValidObjectId(id)) {
            return response.status(400).send(setResponseBody("Invalid task ID", "invalid_request", null))
        }

        if(!taskData) {

        }
        const task = await editTaskInDB(id, taskData)

        response.status(200).send(setResponseBody("Task edited successfully", null, task))
    }
    catch(error) {
        response.status(500).send(setResponseBody(error.message, 'server_error', null))
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    editTask
}