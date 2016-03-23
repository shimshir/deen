var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache');
  if (path.extname(req.path).length > 0) {
    next();
  }
  else {
    req.url = '/index.html';
    next();
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
