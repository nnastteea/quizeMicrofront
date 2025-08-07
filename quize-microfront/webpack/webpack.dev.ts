import path from "path";
import { Configuration } from "webpack";
import { merge } from "webpack-merge";

import config from "./webpack.config.js";

import "webpack-dev-server";

const devConfig: Configuration = merge(config, {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://localhost:8081/",
  },

  devServer: {
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
  },

  devtool: "eval-source-map",
});

export default devConfig;
