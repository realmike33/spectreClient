var express = require('express');
var router = express.Router();
var dashboard = require('./userController.js');
var decode = require('../auth/authService.js').decode;

router.post('/dashboardSave', decode(), dashboard.save);

router.post('/dashboardLoad', decode(), dashboard.load);

module.exports = router;


