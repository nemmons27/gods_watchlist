const Show = require('../models/show');

module.exports = {
    create
};


async function create(req, res) {
    const show = await Show.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    show.comments.push(req.body);
    try {
        await show.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/shows/${show._id}`);
};