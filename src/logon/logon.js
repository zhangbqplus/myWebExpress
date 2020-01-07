var express = require('express');
var router = express.Router();
var method = require('./logon_method');

router.get('/', function (req, res) {
	res.json(method.first());
})

module.exports = router;