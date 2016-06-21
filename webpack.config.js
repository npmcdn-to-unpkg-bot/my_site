module.exports = {
  // webpack folder's entry js - excluded from jekyll's build process.
  entry: "./webpack/entry.js",
  output: {
    // put generated file in assets folder so jekyll will grab it
    path: 'src/assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.pug$/,
      include: '../src/_pugfiles/',
      loader: 'pug-static-loader'
    }]
  }
};
