const Show = require('../models/show');

module.exports = {
    index,
    show,
    new: newShow,
    create,
    delete: deleteShow
};

function index(req, res) {
    res.render('shows/index', {
        shows: Show.getAll(),
        title: 'All Shows'
    });
};

function create(req, res) {
    console.log(req.body);
    res.redirect('/shows');
}

function deleteShow(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/shows');
}

function newShow(req, res) {
    res.render('shows/new', { title: 'New Show' });
}

function show(req, res) {
    res.render('shows/show', {
        show: Show.getOne(req.params.id),
        title: 'Show Details'
    });
}
