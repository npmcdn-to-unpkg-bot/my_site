var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var fs = require('fs');
var React = require('react');
var pug = require('react-pug');

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5
      // History API based routing works. This is
      // a good default that will come in handy
      // in more complicated setups.
      historyApiFallback: true,
      // Unlike the cli flag, this doesn't set
      // HMRPlugin!
      hot: true,
      inline: true,
      // Display only errors to reduce the amount
      // of output.
      stats: 'errors-only',
      // Parse host and port from env to allow
      // customization.
      host: options.host, // Defaults to 'localhost'
      port: options.port,
      contentBase: './public' // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced
      // performance in larger projects. Good default
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false,
          screw_ie8: true
        }
      })
    ]
  };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
}

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
}

exports.pugify = function(path) {
  var extractPug = new ExtractTextPlugin('../../../src/_includes/[name].html');
  return {
    module: {
      loaders: [
        {
          test: /\.pug$/,
          loader: extractPug.extract('pug-static-loader'),
          include: path
        }
      ]
    },
    plugins: [
      extractPug
    ]
  };
}
