const Show = require('../models/show');

module.exports = {
    index,
    show,
    new: newShow,
    create
};

async function index(req, res) {
    const shows = await Show.find({});
    console.log(shows);
    res.render('shows/index', { title: 'All Shows', shows})
} 

function create(req, res) {
    console.log(req.body);
    res.redirect('/shows');
}

// function deleteShow(req, res) {
//     Todo.deleteOne(req.params.id);
//     res.redirect('/shows');
// }

function newShow(req, res) {
    res.render('shows/new', { title: 'New Show' });
}

function show(req, res) {
    res.render('shows/show', {
        show: Show.getOne(req.params.id),
        title: 'Show Details'
    });
}
