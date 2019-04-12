const path = require('path')
const simple_log = require('./index') 

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env'],
        plugins: [[
          simple_log
        ]]
      }
    }]
  }
}
