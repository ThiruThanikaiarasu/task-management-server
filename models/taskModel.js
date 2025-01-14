const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: [true, 'Task title is required'],
            trim: true,
            minlength: [3, 'Title must be at least 3 characters long'],
            maxlength: [100, 'Title must not exceed 100 characters']
        },
        description: {
            type: String,
            trim: true,
            maxlength: [200, 'Description must not exceed 200 characters'],
            default: ''
        },
        status: {
            type: String, 
            enum: {
                values: ['completed', 'in-progress', 'pending'],
                message: 'Status must be either completed, in-progress, or pending'
              },
              default: 'pending'
        },
        priority: {
            type: Number,
            enum: {
                values: [1, 2, 3], // 1 = High, 2 = Medium, 3 = Low
                message: 'Priority must be 1 (High), 2 (Medium), or 3 (Low)'
              },
              default: 2
        },
        dueDate : {
            type: Date,
            validate: {
                validator: function (value) {
                  return value >= new Date()
                },
                message: 'Due date must be in the future'
              }
        }
    },
    {
        timestamps: true,
        collection: 'tasks'
    }
)

module.exports = mongoose.model.tasks || mongoose.model('tasks', taskSchema)