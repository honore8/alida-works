const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater');


mongoose.plugin(slug);
const taskSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Task content is required'],
        validate: {
            validator: function (content) {
                return (content.trim().length > 0)
            },
            message: "Task content can't be empty"
        }
    },
}, { timestamps: true })

const Task = mongoose.model('task', taskSchema)

module.exports = Task