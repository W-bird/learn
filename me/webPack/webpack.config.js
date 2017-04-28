//webpack 核心配置文件
var webpack = require('webpack'),
	htmlPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		// app: './src/app.js',
		bundle: './src/index.js',
		vendor: ['react', 'react-dom']
	},
	output:{
		path: __dirname + '/build',
		filename: '[name].[hash].js'
	},
	module:{
		loaders:[{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude:/node_modules/
		},{
			test: /\.css/,
			loader: 'style-loader!css-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name:['vendor']
		}),
		new htmlPlugin({
			title: 'webpackReact'
		})
	]
}