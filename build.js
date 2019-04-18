const webpack = require('webpack')
const conf = require('./webpack.config')

webpack(conf(), e => {
  console.log(e, 1)
})
