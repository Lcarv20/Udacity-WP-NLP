const path = require("path")
const webpack = require("webpack")
const htmlPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	entry: "./src/client/index.js",
	mode: "production",
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
		new CleanWebpackPlugin({
			// Simulate the removal of files
			dry: true,
			// Write Logs to Console
			verbose: true,
			// Automatically remove all unused webpack assets on rebuild
			cleanStaleWebpackAssets: true,
			protectWebpackAssets: false,
		}),
	],
}

/* 
Loaders:
	- @babel/core @babel/preset-env babel-loader (installed)
	- style-loader node-sass css-loader sass-loader

Plugins:
	- clean-webpack-plugin
	- html-webpack-plugin (installed)
	- mini-css-extract-plugin
	- optimize-css-assets-webpack-plugin
	- terser-webpack-plugin


Outputs,
Dev Mode,
Test Mode,
minify plugins.
hot reload(dev)
*/
