var express = require('express');
var api = express();

api.use('/content', require('./content/content'),
	function (err, req, res, next) {//打印日志
	  console.error(err)
	}
);//content

api.use('/logon', require('./logon/logon'));//logon

module.exports = api;