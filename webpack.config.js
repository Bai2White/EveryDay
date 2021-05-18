const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    entry: './src/index.js',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: 'css-loader'
      },
      // {
      //   test: require.resolve('index.js'),
      //   use: 'imports-loader?this=>window' // 指定this对象 细粒度shim 它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现
      // },
      // {
      //   test: require.resolve('globals,js'),
      //   use: 'export-loader?file,parse=helper.parse' // entry 入口文件中 import {file,parse} form './globals.js' globals:var file =...;helper = {parse:...}
      // }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    }),
  ]
}
