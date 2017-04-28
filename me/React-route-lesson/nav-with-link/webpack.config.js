var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
//path.join(__dirname, 'build'); //__dirname + '/build'
//__dirname 是我们项目中的根路径
var PATH = {
	entry: path.join(__dirname, 'index.js'),
	output: path.join(__dirname, 'build')
}



module.exports = {
	entry: {
		app: PATH.entry,
		vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
	},
	output: {
		path: PATH.output,
		filename: '[name].js'
	},
	module:{
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader',
			exclude: /node_modules/
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor'] //把公共 的js片段抽离出来，进行代码的优化
		}),
		new htmlPlugin({
			title: 'React-route'
		})
	]
}