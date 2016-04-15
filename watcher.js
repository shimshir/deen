var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var compiler = webpack(webpackConfig);

var webpackWatcher = {
	watch: function() {
		compiler.watch({
				aggregateTimeout: 300,
				poll: true
			},
			function(err, stats) {
				var output = stats.toString({ colors: true });
				var outputLines = output.split('\n');
				for (var i = 0; i < outputLines.length; i++) {
					if (i < 6)
						console.log(outputLines[i]);
					else if (outputLines[i].indexOf('built') != -1)
						console.log(outputLines[i]);
				}
			}
		);
	}
}

module.exports = webpackWatcher
