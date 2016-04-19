var path = require('path');

module.exports = {
	entry: './app/deenApp/index.js',
	output: {
		path: path.join(__dirname, 'public/static/scripts'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: path.join(__dirname, 'app'),
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	}
};