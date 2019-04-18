const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

module.exports = (env, argv) => {
  return merge(baseConf(env, argv), {
    devServer: {
      contentBase: "./dist",
      inline: true,
      before(app) {
        app.get('/usr', (req, res) => {
          res.end('3213')
        })
      },
      after(app) {
        // console.log(app)
      },
      publicPath: 'assets/'
    }
  })
}