/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.svg$|\.jpe?g$|\.gif$|\.png$/i,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve('src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json'],
  },
  plugins: [],
  externals: {},
};
