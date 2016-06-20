var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/usersCtrl');

router.get('/', postsCtrl.allposts);




module.exports = router;
