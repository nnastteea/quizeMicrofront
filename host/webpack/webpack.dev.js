const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

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
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        quize: "quize@http://localhost:8081/remoteEntry.js",
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        "react-dom": {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
});
