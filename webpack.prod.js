const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      /*压缩文件，removeAttributeQuotes指去掉属性的双引号，目前你随便不用也行*/
      minify:{
        removeComments:true, //移除HTML中的注释
        collapseWhitespace:true    //删除空白符与换行符
      },
      /*加入hash值，为了避免浏览器缓存js*/
      hash:true,
      template: path.join(__dirname, './src/index.html'), // 指定模板文件路径
      filename: 'index.html' // 设置生成的内存页面的名称
    }),
    new ExtractTextPlugin("static/css/styles.css"),
    new UglifyJSPlugin({
      parallel: 4,
      uglifyOptions: {
          output: {
              comments: false,
              beautify: false,
          },
          compress: {
              warnings: false
          },
      },
      cache: true,
      

    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
        algorithm: 'gzip',//算法
        test: new RegExp(
             '\\.(js|css)$'    //压缩 js 与 css
        ),
        threshold: 10240,//只处理比这个值大的资源。按字节计算
        minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
   }),
   new HtmlWebpackPlugin({
    title: '',
      //  template: '/src/index.html',
       minify: {
           removeComments: true,
           collapseWhitespace: true,
           removeRedundantAttributes: true,
           useShortDoctype: true,
           removeEmptyAttributes: true,
           removeStyleLinkTypeAttributes: true,
           keepClosingSlash: true,
           minifyJS: true,
           minifyCSS: true,
           minifyURLs: true,
       },
       chunksSortMode:'dependency'
   }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
          vendor: {
              name: "vendor",
              chunks: "initial",
              minChunks: 2
          }
      }
    },
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
              comments: false
          },
          compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true
          }
        }
      }),
    ]
  }
});