const mongoose = require('mongoose');
const { show } = require('../controllers/shows');
const shows = require('../controllers/shows');
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
    getOne,
    create,
    deleteOne
};

function getOne(id) {
    id = parseInt(id);
    return shows.find(show => show.id === id);
};

function getAll() {
    return shows;
};

function create(show) {
    show.id = Date.now() % 1000000;
    show.done = false;
    shows.push(show);
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = shows.findIndex(show => show.id === id);
    shows.splice(idx, 1);
}