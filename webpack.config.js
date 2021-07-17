const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'root.js',
  },
  devServer: {
    port: 8080,
    contentBase: 'dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', 
      filename: 'index.html',
      inject: 'body', // Inject scripts into the body.
    }),
  ]
};

module.exports = config;