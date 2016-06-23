const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const helpers = require('./webpack/webpack.helpers.js');
const PATHS = {
  js: path.resolve('./src/assets/js/'),
  pug: path.resolve('./src/_pugfiles'),
  includes: path.resolve('./src/_includes'),
  public: path.join(__dirname, 'public')
};

const common = {
  // webpack folder's entry js - excluded from jekyll's build process.
  entry: {
    src: path.resolve(__dirname, './webpack/entry.js'),
    vendors: ['react', 'react-dom']
  },
  output: {
    // put generated file in assets folder so jekyll will grab it
    path: PATHS.js,
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /.svg$/,
      loader: 'svg-url-loader'
  }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
  config = merge(
    common,
    {
      devtool: 'source-map',
      output: {
        path: PATHS.js,
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
      }
    },
    helpers.clean(PATHS.js, '*'),
    helpers.minify(),
    helpers.pugify(PATHS.pug)
  );
  break;
default:
  config = merge(
    common,
    {
      devtool: 'eval-source-map'
    },
    helpers.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
}

if (process.env.NODE_ENV === 'production') {
  config.output.path = path.join(__dirname, 'src', 'assets', 'js')
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }))
}

module.exports = validate(config, {
  quiet: true
});
