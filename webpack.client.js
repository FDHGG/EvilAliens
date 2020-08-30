const path = require('path');
const webpack = require('webpack');
const cwd = process.cwd();

module.exports = {
  name: 'browser',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(cwd,'client','index.js')
  ],
  output: {
    path: path.join(cwd,'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader',{
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers')
            },
          },
        },]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
}