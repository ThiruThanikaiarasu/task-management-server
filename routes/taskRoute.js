const express = require('express')
const router = express.Router()

const validateRequest = require('../middleware/validateRequest')
const { createTaskSchema } = require('../validators/taskValidator')
const { createTask } = require('../controller/taskController')


router.post(
    '/',

    validateRequest(createTaskSchema),

    createTask
)

module.exports = router