const express = require('express')
const router = express.Router()

const validateRequest = require('../middleware/validateRequest')
const { createTaskSchema } = require('../validators/taskValidator')
const { createTask, getAllTasks, getTaskById } = require('../controller/taskController')


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

module.exports = router