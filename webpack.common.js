const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  entry: "./src/index.js",

  output: {
    // filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    clean: true
  },

  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.(webp|png|jpg|gif|jpeg|svg)$/i, type: "asset/resource" },
      { test: /\.(woff|woff2)$/i, type: "asset/resource" },
    ]
  },

}