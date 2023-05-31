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

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return shows.find(show => show.id === id);
};

function getAll() {
    return shows;
}
