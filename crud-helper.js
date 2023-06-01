require('dotenv').config();
// Connect to the database
require('./config/database');

// Require the app's Mongoose models
const Show = require('./models/show');

async function main () {
    let shows = await Show.insertOne({
        name: 'One Piece',
        category: 'Adventure',
        episode: '1063',
    });
    console.log(shows);
};
main()
