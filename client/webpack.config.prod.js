var path = require('path');
var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  debug: false,
  devtool: null,
  noInfo: false,
  entry: {
    polyfills: path.resolve(__dirname, 'source/polyfills'),
    main: path.resolve(__dirname, 'source/index'),
  },
  target: 'web',
  output: {
    path: '../public/assets',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),

    // Generate hash of bundles for cache busting
    new ManifestPlugin(),

    // Eliminate duplicate packages
    new webpack.optimize.DedupePlugin(),

    // Minify
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    ]
  }
};
