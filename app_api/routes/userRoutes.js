var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/usersCtrl');

router.get('/users', usersCtrl.allUsers);



module.exports = router;
