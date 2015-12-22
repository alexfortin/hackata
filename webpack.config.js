var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/Main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/app/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      { test: /\.jsx$/,
        loader: 'react-hot!babel',
        include: path.join(__dirname, 'src') },
      { test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
         cacheDirectory: true,
         presets: ['react', 'es2015'] }},
       { test: /\.(jpe|jpg|png|woff2|eot|ttf|svg)(\?.*$|$)/,
         loader: 'url-loader?limit=100000' },
       { test: /\.scss?$/,
         loader: 'style!css!sass',
         include: path.join(__dirname, 'css') },
       { test: /\.css$/,
         loader: 'style!css' }
    ]
  }
};
