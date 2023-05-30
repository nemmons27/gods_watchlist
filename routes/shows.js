var express = require('express');
var router = express.Router();

const showsCtrl = require('../controllers/shows')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/new', showsCtrl.new)

module.exports = router;