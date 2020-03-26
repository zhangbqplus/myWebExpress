var express = require('express');
var router = express.Router();
var api = express();

var method = require('./logon_method');

router.get('/', function (req, res) {
	console.log(req);
	res.json(method.first());
})

module.exports = router;