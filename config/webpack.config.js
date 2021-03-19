const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "./../src/index.js"),
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 4040,
    contentBase: path.resolve(__dirname, "./../static/dist"),
    open: true,
    hot: true,
  },
  
  resolve: {
   extensions: [".js", ".jsx"],
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css&/,
        use: ["css-loader", "style-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader?name=images/[name].[ext]"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./../static/index.html"),
    }),
    new MiniCSSExtractPlugin({
      filename: "styles.css",
    }),
  ],
  output: {
    filename: "myBundle.js",
    path: path.resolve(__dirname, "./../static/dist"),
    clean: true,
  },
};
