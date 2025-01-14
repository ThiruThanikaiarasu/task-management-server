const express = require('express')
const router = express.Router()

const validateRequest = require('../middleware/validateRequest')
const { createTaskSchema, editTaskSchema } = require('../validators/taskValidator')
const { createTask, getAllTasks, getTaskById, editTask } = require('../controller/taskController')


router.post(
    '/',

    validateRequest(createTaskSchema),

    createTask
)

router.get(
    '/',

    getAllTasks
)

router.get(
    '/:id',

    getTaskById
)

router.patch(
    '/:id',

    validateRequest(editTaskSchema),

    editTask
)

module.exports = router