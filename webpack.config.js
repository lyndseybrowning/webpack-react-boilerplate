module.exports = {
  entry: './app/js/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'eslint-loader'
      }
    ],
    loaders: [    
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      }
    ]
  }
}
