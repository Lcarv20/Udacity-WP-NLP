const path = require("path")
const webpack = require("webpack")
const htmlPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/client/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "distr"),
	},
	module: {
		//Loader for babel (to convert all es6+ into browswer compatible js)
		rules: [
			{
				test: "/.js$/",
				exclude: /node_modules/,
				loader: "babel-loader",
			},
		],
	},
	plugins: [
		new htmlPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		}),
	],
}
