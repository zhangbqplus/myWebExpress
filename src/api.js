var express = require('express');
var api = express();

api.use('/content', require('./content/content'));//content

api.use('/', require('./logon/logon'));//logon

module.exports = api;