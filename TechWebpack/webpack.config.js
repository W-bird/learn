//webpack 核心配置文件
var webpack = require('webpack');

var htmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		//app: './src/app.js',  //入口文件的配置 
		bundle: './src/index.js', 
		vendor: ['react', 'react-dom'] //把框架 和自己本身的逻辑进行一定的分类

		//bundle.js 就是我们自己业务逻辑
		//vendor.js 就是我们的万年不变框架代码，可以被一直缓存
	},
	output: {
		path: __dirname + '/build',
		filename: '[name].[hash].js'
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
			title: 'webpackReact'
		})
	]
}