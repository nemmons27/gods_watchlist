var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "God's Watchlist" });
});
// GET /todos
router.get('/', showsCtrl.index);
// GET /todos/:id
router.get('/:id', showsCtrl.show);

module.exports = router;