const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
	mode: 'development',
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.[hash].js',
		publicPath: '/',
	},
	module: {
		rules: [
			//
			// 첫 번째 룰
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// 두 번째 룰
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: 'src/',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
	],
	devServer: {
		host: 'localhost',
		port: port,
		open: true,
		historyApiFallback: true,
		hot: true,
	},
};
