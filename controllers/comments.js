const Show = require('../models/show');

module.exports = {
    create
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