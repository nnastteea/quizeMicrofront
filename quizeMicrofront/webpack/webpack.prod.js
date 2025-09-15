const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "auto",
    filename: "[name].[contenthash].js",
    clean: true,
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
