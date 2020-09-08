const path = require("path")
const webpack = require("webpack")
const htmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")

module.exports = {
	entry: "./src/client/index.js",
	mode: "production",
	optimization: {
		minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
	output: {
		libraryTarget: "var",
		library: "Client",
	},
	module: {
		//Loader for babel (to convert all es6+ into browswer compatible js)
		rules: [
			{
				test: "/.js$/",
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new htmlPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new WorkboxPlugin.GenerateSW(),
	],
}
