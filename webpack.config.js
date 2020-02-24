const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  target: "web",
  mode: "development",
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", "*"],
    alias: {
      utils: path.resolve(__dirname, "./src/economic_analysis/utils")    
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "babel-loader"
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader"
        })
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  devtool: "source-map"
};
