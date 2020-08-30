const path = require('path');
const cwd = process.cwd();

module.exports = {
  mode: 'production',
  entry: [path.join(cwd,'client','index.js')],
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
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}