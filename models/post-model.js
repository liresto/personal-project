const mongoose = require('mongoose');

const {Schema} = mongoose;

const postSchema = new Schema({
    artist: String,
    image: String,
    portfolio: String,
    title: String,
    description: String,
    },
);

const Post = mongoose.model('Post', postSchema);


module.exports = Post;