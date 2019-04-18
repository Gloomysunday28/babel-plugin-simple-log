const merge = require('webpack-merge')
const path = require('path')
const baseConf = require('./webpack.base.conf')

module.exports = (env, argv) => {
  return merge(baseConf(env, argv), {
    mode: 'production',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'lib')
    }
  })
}