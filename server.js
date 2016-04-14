var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')

var server = express();

server.use(bodyParser.urlencoded({extended:false}));

server.use(function (req, res, next) {
	res.setHeader('Cache-Control', 'no-cache');
	if (path.extname(req.path).length > 0) {
		next();
	}
	else {
		req.url = '/index.html';
		next();
	}
});

server.use(express.static(path.join(__dirname, 'public')));

server.set('port', (process.env.PORT || 3000));

module.exports = server;