const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  outputDir: 'dist',
  publicPath: './',
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: { // 开发服务器配置
      historyApiFallback: false,
      noInfo: false,
      host: "localhost",
      contentBase: './',
      hot: true,
      inline: true,
      watchOptions: {
          // 忽略监视的文件或目录
          ignored: ['node_modules'],
          aggregateTimeout: 600
      },
      overlay: { // 这里配置 html 页面是否显示 eslint 错误信息蒙版
          errors: true,
          warnings: true
      },
      //跨域处理
      // proxy: {
      //     '/api': {
      //         // target: 'http://server-admin-api.wawaeg.cn/wawa-saas-server', //对应自己的接口
      //         target: 'http://192.168.0.197:8082', //对应自己的接口/
      //         changeOrigin: true,
      //         ws: true,
      //         pathRewrite: {
      //             '^/api': ''
      //         }
      //     }
      // }
  },
  configureWebpack: config => {
      config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
      // if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      return {
          plugins: [new CompressionPlugin({
              test: /\.js$|\.css/,
              threshold: 10240,
              minRatio: 0.8,
              deleteOriginalAssets: false
          })],
          output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
              filename: `[name].${process.env.VUE_APP_VERSION}.[hash].js`,
              chunkFilename: `[name].${process.env.VUE_APP_VERSION}.[hash].js`
          }
      };
      // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
};
