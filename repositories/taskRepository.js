const taskModel = require("../models/taskModel")

const findTaskByTitleInDB = (title) => {
    return taskModel.findOne({ title })
}

const createANewTaskInDB = (taskData) => {
    return taskModel.create(taskData)
}

const getAllTasksFromDB = () => {
    return taskModel.find()
}

module.exports = {
    findTaskByTitleInDB,
    createANewTaskInDB,
    getAllTasksFromDB
}