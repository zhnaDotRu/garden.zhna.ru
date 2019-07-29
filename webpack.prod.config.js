const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './app/entry.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js' 
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg|gif)$/, 
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject: true,
      chunks: ['main']
    }),
    new StyleLintPlugin({
      extends: 'stylelint-config-standard'
    }),
    new MiniCssExtractPlugin({filename: './css/[name].css'})
  ]
};