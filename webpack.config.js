module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
         cacheDirectory: true,
         presets: ['react', 'es2015']
       }
     },
     {
       test: /\.(jpe|jpg|png|woff2|eot|ttf|svg)(\?.*$|$)/,
       loader: 'url-loader?limit=100000'
     },
     {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }
    ]
  }
};
