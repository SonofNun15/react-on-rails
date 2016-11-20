import path from 'path'
import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
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

    // Generate a css file with cache busting
    new ExtractTextPlugin('[name].[contenthash].css'),

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
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
    ]
  }
}
