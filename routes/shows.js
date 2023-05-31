var express = require('express');
var router = express.Router();

const showsCtrl = require('../controllers/shows');

// All actual paths start with "/shows"
//GET /shows
router.get('/', showsCtrl.index);
//GET /shows/new
router.get('/new', showsCtrl.new);
//GET /shows/:id
router.get('/:id', showsCtrl.show);
// POST /shows
router.post('/', showsCtrl.create);
// router.delete('/:id', showsCtrl.delete);


module.exports = router;