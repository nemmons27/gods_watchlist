var express = require('express');
var router = express.Router();

const showsCtrl = require('../controllers/shows')

 // All actual paths start with "/shows"
router.get('/', showsCtrl.index)

module.exports = router;