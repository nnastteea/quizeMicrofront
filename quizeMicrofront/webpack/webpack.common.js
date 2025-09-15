const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "quize",
      filename: "remoteEntry.js",
      exposes: {
        "./Quize": "./src/bootstrap.tsx",
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
    new CleanWebpackPlugin(),
  ],
};
