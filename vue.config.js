const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
const IS_PROD = process.env.NODE_ENV === 'production'
const IS_DEV = process.env.NODE_ENV === 'development'
const IS_TEST = process.env.NODE_ENV === 'test'
const IS_TEST_API = process.env.VUE_APP_BASE_API === 'http://10.230.39.58:33597/service/Mobile/'

// 配置打印工具 new ConsolePlugin
var ConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
    chainWebpack: config => {
        // 设置别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('utils', resolve('src/utils'))
            .set('views', resolve('src/views'))
            .set('services', resolve('src/services'))
        // vue-cli3.0   加上这行才能按需加载  移除 prefetch 插件
        config.plugins.delete('prefetch')
        // 移除 preload 插件
        config.plugins.delete('preload')
        // 压缩代码
        config.optimization.minimize(true)
        // 分割代码
        config.optimization.splitChunks({
            chunks: 'all'
        })
        // 设置html标题
        config.plugin('html').tap(args => {
            // pages设置
            args[0].title = '招聘平台'
            args[0].chunksSortMode = 'none'
            return args
        })
        if (!IS_DEV) {
            // 利用splitChunks单独打包第三方模块
            config.optimization.delete('splitChunks')
        }
        // config.module
        //     .rule('images')
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .tap(options => Object.assign(options, { limit: 30720 })) // 设置图片转base64
    },
    configureWebpack: config => {
        // 测试生产环境插件配置
        let testPlugins = []
        let prodPlugins = []
        if (IS_TEST) {
            testPlugins = [
                // 设置打印工具 npm i -D vconsole-webpack-plugin
                new ConsolePlugin({
                    filter: [],
                    enable: true
                })
            ]
        }
        if (!IS_DEV) {
            prodPlugins = []
            // 利用splitChunks单独打包第三方模块
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        libs: {
                            name: 'chunk-libs',
                            test: /[\\/]node_modules[\\/]/,
                            priority: 10,
                            chunks: 'initial'
                        },
                        vantUI: {
                            name: 'chunk-vant',
                            priority: 20,
                            test: /[\\/]node_modules[\\/]vant[\\/]/,
                            chunks: 'all'
                        }
                    }
                }
            }
        }
        config.plugins = [...config.plugins, ...testPlugins, ...prodPlugins]
    },
    productionSourceMap: false,
    lintOnSave: IS_DEV,
    publicPath: IS_DEV ? '/' : './', // 公共目录
    assetsDir: IS_DEV ? '' : './static/', // 静态资源目录
    outputDir: './dist' // 输出目录
}
