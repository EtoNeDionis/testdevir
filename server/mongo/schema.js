const {Schema, model} = require('mongoose')

const Post = new Schema({
    title: {type: String, unique: true, required: true},
    content: {type: String}
})

module.exports = model('Post', Post)