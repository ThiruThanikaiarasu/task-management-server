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

const getTaskByIdFromDB = (id) => {
    return taskModel.findOne({ _id: id })
}

const editTaskInDB = (id, taskData) => {
    return taskModel.findByIdAndUpdate(id, taskData, { new: true })
}

module.exports = {
    findTaskByTitleInDB,
    createANewTaskInDB,
    getAllTasksFromDB,
    getTaskByIdFromDB,
    editTaskInDB
}