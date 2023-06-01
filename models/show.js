const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
        // required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
},{
    timestamps: true
})
const showSchema = new mongoose.Schema({
    name: String,
    category: String,
    episode: String,
    comments: [commentsSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Show', showSchema);
