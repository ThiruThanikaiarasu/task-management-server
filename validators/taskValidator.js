const Joi = require('joi')

const createTaskSchema = Joi.object(
    {
        title: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .required()
            .messages({
                'string.empty': 'Task title is required',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title must not exceed 100 characters',
                'any.required': 'Task title is required'
            }),

        description: Joi.string()
            .trim()
            .max(200)
            .optional()
            .messages({
                'string.max': 'Description must not exceed 200 characters'
            }),

        status: Joi.string()
            .valid('completed', 'in-progress', 'pending')
            .default('pending')
            .messages({
                'any.only': 'Status must be either completed, in-progress, or pending'
            }),

        priority: Joi.number()
            .valid(1, 2, 3)
            .default(2)
            .messages({
                'any.only': 'Priority must be 1 (High), 2 (Medium), or 3 (Low)'
            }),

        dueDate: Joi.date()
            .greater('now')
            .optional()
            .messages({
                'date.greater': 'Due date must be in the future'
            })
    }
)

const editTaskSchema = Joi.object(
    {
        title: Joi.string()
            .trim()
            .min(3)
            .max(100)
            .optional()
            .messages({
                'string.empty': 'Task title is required if provided',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title must not exceed 100 characters'
            }),
    
        description: Joi.string()
            .trim()
            .max(200)
            .optional()
            .messages({
                'string.max': 'Description must not exceed 200 characters'
            }),
    
        status: Joi.string()
            .valid('completed', 'in-progress', 'pending')
            .optional()
            .messages({
                'any.only': 'Status must be either completed, in-progress, or pending'
            }),
    
        priority: Joi.number()
            .valid(1, 2, 3)
            .optional()
            .messages({
                'any.only': 'Priority must be 1 (High), 2 (Medium), or 3 (Low)'
            }),
    
        dueDate: Joi.date()
            .greater('now')
            .optional()
            .messages({
                'date.greater': 'Due date must be in the future'
            })
    }
)

module.exports = { 
    createTaskSchema,
    editTaskSchema 
}
