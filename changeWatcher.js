var fs = require('fs');
var path = require('path');
var browserify = require("browserify");
var babelify = require("babelify");
var walk = require('walk');

var brofy = browserify({ debug: true })
							.transform(babelify, { presets: ["es2015", "react"] })
							.require(path.join(__dirname, 'app/index.js'), { entry: true })
							.on("bundle", function (bundle) {
								console.log("Piping bundle stream.");
								bundle
									.pipe(fs.createWriteStream(path.join(__dirname, 'public/static/scripts/bundle.js')))
									.on('finish', function() { console.log("Created bundle file."); })
							});

var options = {
	followLinks: false,
	listeners: {
		file: function (root, fileStats, next) {
			var filePath = path.join(root, fileStats.name);
			fs.watch(filePath, function(e) {
				console.log(e);
				if (e == 'change') {
					console.log(filePath + ' changed, starting browserify.');
					brofy
					.bundle()
					.on('error', function(err) {
						console.error('Error:' + err.message);
					});
				}
			});
		}
	}
};

module.exports = { walk: walk, options: options, root: path.join(__dirname, 'app') };
