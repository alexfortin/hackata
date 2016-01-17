var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/Main'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
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
       { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ] },
       { test: /\.scss?$/,
         loader: 'style!css!sass',
         include: path.join(__dirname, 'css') },
       { test: /\.css$/,
         loader: 'style!css' },
       { test: /\.(otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader" }
    ]
  }
};
