var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/Main'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
