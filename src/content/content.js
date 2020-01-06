var express = require('express');
var router = express.Router();
var method = require('./content_method');

router.get('/first', function (req, res) {
	res.send(method.first());
})

module.exports = router;