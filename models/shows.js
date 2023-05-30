const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
    name: String,
    category: String,
    episode: String,
    //comments: [commentsSchema]
}, {
    timestamps: true
});