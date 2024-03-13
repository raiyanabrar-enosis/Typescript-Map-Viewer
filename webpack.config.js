const path = require("path");

module.exports = {
	mode: "development",
	entry: "./out/app/index.js", // Entry point for your application
	output: {
		filename: "bundle.js", // Output filename for the bundled JavaScript
		path: path.resolve(__dirname, "out"), // Output directory for the bundled files
	},
	module: {
		rules: [
			{
				test: /\.ts$/, // Rule to handle TypeScript files
				use: "ts-loader", // Use the ts-loader to compile TypeScript
				exclude: /node_modules/,
			},
			// Add other loaders for handling additional file types if needed
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "out"),
		},
		compress: true,
		port: 3000,
		hot: true,
	},
};
