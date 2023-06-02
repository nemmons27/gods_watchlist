const Show = require('../models/show');

module.exports = {
    index,
    show,
    new: newShow,
    create
};

async function index(req, res) {
    const shows = await Show.find({});
    res.render('shows/index', { title: 'All Shows', shows})
} 

function create(req, res) {
    res.redirect('/shows');
}

// function deleteShow(req, res) {
//     Todo.deleteOne(req.params.id);
//     res.redirect('/shows');
// }

function newShow(req, res) {
    res.render('shows/new', { title: 'New Show' });
}

async function show(req, res) {
    let show = await Show.findById(req.params.id)
    res.render('shows/show', {
        show,
        title: 'Show Details'
    });
}
