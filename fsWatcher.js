var fs = require('fs');
var path = require('path');
var browserify = require("browserify");
var babelify = require("babelify");

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk(path.join(__dirname, 'app'), function(err, results) {
  if (err) throw err;
  results.forEach(function(file) {
    fs.watch(file, function(e) {
      if (e == 'change') {
        console.log(file + ' changed, starting browserify.');
        browserify({ debug: true })
          .transform(babelify, { presets: ["es2016", "react"] })
          .require(path.join(__dirname, 'app/index.js'), { entry: true })
          .on("error", function (err) { console.log("Error: " + err.message); })
          .on("bundle", function (bundle) { console.log("Browserify done."); })
          .bundle()
          .pipe(fs.createWriteStream(path.join(__dirname, 'public/static/scripts/app.js')));
      }
    });
  });
  
});
