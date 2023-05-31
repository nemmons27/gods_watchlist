const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    name: String,
    category: String,
    episode: String,
    //comments: [commentsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Show', showSchema);
