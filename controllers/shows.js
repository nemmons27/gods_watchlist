const Show = require('../models/show');

module.exports = {
    index,
    show
};

function index(req, res) {
    res.render('shows/index', {
        shows: Show.getAll(),
        title: 'All Shows'
    });
};


function show(req, res) {
    res.render('shows/show', {
        show: Show.getOne(req.params.id),
        title: 'Show Details'
    });
}
