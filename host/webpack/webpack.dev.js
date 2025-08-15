const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "http://localhost:8080/",
  },

  devServer: {
    static: "./dist",
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    hot: true,
  },

  devtool: "eval-source-map",
});
