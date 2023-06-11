const mongoose = require('mongoose');

const {Post} = mongoose;

const postSchema = new Post({
    artist: String,
    image: String,
    portfolio: String,
    title: String,
    description: String,
    },
);

const Comic = mongoose.model('Post', postSchema);


module.exports = Comic;