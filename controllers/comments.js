const Show = require('../models/show');


module.exports = {
    create,
    delete: deleteComment
};


async function create(req, res) {
    const show = await Show.findById(req.params.id);
    const comment = {content: req.body.content,user: req.user.id,userName: req.user.name, userAvatar: req.user.avatar};
    show.comments.push(comment);
    try {
        await show.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/shows/${show._id}`);
};

function deleteComment(req, res, next) {
    Show.findOne({
        'comments._id': req.params.id, 
        'comments.user': req.user._id}).then(function(show) {
        // prevents rogue users
        if (!show) return res.redirect('/');
        // deletes the review using remove method
        show.comments.remove(req.params.id);
        // save the updated show
        show.save().then(function() { 
            res.redirect(`/shows/${show._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}