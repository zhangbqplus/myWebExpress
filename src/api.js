var express = require('express');
var api = express();

api.use('/', require('./content/content'));//content

module.exports = api;