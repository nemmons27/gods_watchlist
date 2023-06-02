const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments')

router.post('/shows/:id/comments', commentsCtrl.create)
//DELETE /reviews/:id
router.delete('/comments/:id', commentsCtrl.delete);



module.exports = router;