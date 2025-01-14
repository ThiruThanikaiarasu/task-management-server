const express = require('express')
const router = express.Router()

const validateRequest = require('../middleware/validateRequest')
const { createTaskSchema } = require('../validators/taskValidator')
const { createTask, getAllTasks } = require('../controller/taskController')


router.post(
    '/',

    validateRequest(createTaskSchema),

    createTask
)

router.get(
    '/',

    

    getAllTasks
)

module.exports = router