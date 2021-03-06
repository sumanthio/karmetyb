const path = require('path');
const webpack = require("webpack");
const libPath = path.join(__dirname, 'app');
const wwwPath = path.join(__dirname, 'dist');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  devtool: 'source-map',
  entry: path.join(libPath, 'index.js'),
  output: {
    path: path.join(wwwPath),
    filename: 'bundle-[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'templates'
          }
        }]
      }, 
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", 
                "css-loader",
                "postcss-loader", "sass-loader"
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
              {
                loader: "ng-annotate-loader",
                options: {
                  add: true
                }
              },
              {
                loader: "babel-loader"
              }
              
            ]
        }, 
      {
        test: [/fontawesome-webfont\.svg/, /fontawesome-webfont\.eot/, /fontawesome-webfont\.ttf/, /fontawesome-webfont\.woff/, /fontawesome-webfont\.woff2/, /glyphicons-halflings-regular\.svg/, /glyphicons-halflings-regular\.eot/, /glyphicons-halflings-regular\.ttf/, /glyphicons-halflings-regular\.woff/, /glyphicons-halflings-regular\.woff2/],
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts"
          }
        }]
      }
      ]
  },
  plugins: [
    // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'index_template.ejs')
    })
  ],
  devServer: {
    // proxy: {
    //   '/books': {
    //     target: 'https://interview-api-staging.bytemark.co/books'
    //   }
    // }
  }
};

module.exports = config;