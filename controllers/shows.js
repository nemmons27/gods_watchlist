const Show = require('../models/show');
module.exports = {
    index,
    new: newShow
};

function index(req, res) {
    res.render('shows/index', {
        shows: Show.getAll()
    });
};

function newShow(req, res) {
    res.render('shows/new', {errorMsg: ''});
}
