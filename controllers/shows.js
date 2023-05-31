const Show = require('../models/shows');

module.exports = {
    index,
    new: newShow,
    show
};

function index(req, res) {
    res.render('shows/index', {
        shows: Show.getAll()
    });
};

function newShow(req, res) {
    res.render('shows/new', {errorMsg: ''});
}

function show(req, res) {
    res.render('shows/show', {
        show: Show.getOne(req.params.id),
    });
}
