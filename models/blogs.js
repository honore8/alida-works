const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater');


mongoose.plugin(slug);
const blogSchema = new Schema({
    title: {type: String, required: [true, 'Title is required']},
    snippet: { type: String, required: [true, 'Snippet is required']},
    body: { type: String, required: [true, 'Body is required']},
    slug: { type: String, slug: "title" }

}, {timestamps: true})

const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog