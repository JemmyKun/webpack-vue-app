const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: ["vue-loader"]
      },
      {
        test: /\.css|sass|scss/,
        exclude: /node_modules/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components")
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  devServer: {
    port: "8088",
    host: "localhost",
    hot: true,
    compress: true
  }
};
