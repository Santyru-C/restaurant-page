const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
