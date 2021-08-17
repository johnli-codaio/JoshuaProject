import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options:  {
              modules: true,
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.less'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'root.js',
  },
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: 'dist/',
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', 
      filename: 'index.html',
      inject: 'body', // Inject scripts into the body.
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/data', to: 'data'},
        {from: 'src/assets', to: 'assets'},
      ]
    }),
  ]
};

export default config;
