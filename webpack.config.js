const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 加载图片
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          // 返回data-url
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // 当文件大于限制时使用其他加载器加载图片
              fallback: 'image-webpack-loader'
            },
          },
          // 压缩图片
          {
            loader: 'image-webpack-loader',
            // 不同质量
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  }
}
