const taskModel = require("../models/taskModel")

const findTaskByTitleInDB = (title) => {
    return taskModel.findOne({ title })
}

const createANewTaskInDB = (taskData) => {
    return taskModel.create(taskData)
}

module.exports = {
    findTaskByTitleInDB,
    createANewTaskInDB
}