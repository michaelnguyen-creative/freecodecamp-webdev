const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './build',
    compress: true,
    port: 3000
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'drum-machine-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env"
            ]
          }
        }
      }
    ]
  }
}