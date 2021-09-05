const path = require('path')
const WebpackReadFile = require('./webpack.read.file')
console.log(WebpackReadFile.getFiles('src/js'))
module.exports = {
  // entry: {
  //   index: './src/js/index.js'
  // },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: {
      type: 'umd',
      name: require('../package.config.json').name,
      export: 'default'
    },
    globalObject: 'this',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}
