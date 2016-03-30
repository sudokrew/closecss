/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const config = Object.assign({}, baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = './src/index';

config.output.publicPath = '/';

config.devServer = {
  hot: true,
  inline: true,
  progress: true,
  contentBase: './dist',
  stats: { colors: true },
};

config.module.loaders.push({
  test: /\.scss$/,
  loaders: [
    'style-loader',
    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'sass-loader?sourceMap',
    'postcss-loader',
  ],
});

config.postcss = function postcss() {
  return [
    require('postcss-cssnext')({ browsers: ['last 2 versions', 'IE > 10'] }),
  ];
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: true,
  }),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true,
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  })
);

module.exports = config;
