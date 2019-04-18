const path = require('path')
const simple_log = require('./index')
// const os = require('os');

// //获取本机IP,当IP 设置为本机IP 后, 局域网内其它人可以通过 IP+端口,访问本机开发环境.
// let host = '';
// let obj = os.networkInterfaces();
// for (n in obj) {
//   obj[n].map(v => {
//     /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}$/.test(v.address) && (host = v.address)
//   })
// }

module.exports = function(env, argv) {
  return {
    mode: 'development',
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
          plugins: [[simple_log]]
        }
      }]
    }
  }
}
