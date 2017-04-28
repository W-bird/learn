webpack 教学  react + webpack

叫做 前端自动化工具：
 gulp --》 grunt --》 fis(国内百度) --》webpack(国际化)


 用来解决什么问题？ 解决前端工程化的问题

 1. 可以压缩js代码 webpack -p
 2. 在进行模块化开发的同时，  module.exports  require  cmd规范（Commonjs）
 可以把不同的模块合并到一个js中去执行
 解决js的相互依赖关系

 js的合并  是一个比较复杂的问题，因为依赖的关系
 可能A模块执行要依赖于B模块
 （CMD AMD）

 3.进行必要js的转译工作 比如可以把es6代码 转译成
 es5代码，或者把jsx代码 转化成js 

 4. 也可以进行css模块化的开发

 5. 进行工程性的性能优化



 入门：（最正统的入门方式，与国际接轨）

 webpack 它是依赖于node.js的环境

 安装node.js

 1. npm init -y  ---> 直接生成一个package.json的依赖配置文件
 （使用webpack 无论如何都要生成一个package.json）

 2. 将webpack 工具 下载到本地
 npm install webpack --save-dev

 配置webpack.config.js文件，配置相应的入口、出口文件

 利用 module.exports 和 require 进行导出、导入的这个模块化开发

 3. 使用webpack的相关命令 ，进行自动化处理

 1. webpack  可以进行常规的js打包操作

 2. webpack -w 可以实时监听webpack的打包

 3. webpack -p 可以进行js的压缩


 怎么利用webpack将 es6代码转译成普通js进行执行转jsX也同时成功

 它需要依赖一些相关插件 (bable)
 npm install babel-core --save-dev
 npm install babel-loader --save-dev
 npm install babel-preset-es2015 --save-dev
 npm install babel-preset-stage-2 --save-dev
 npm install babel-preset-react --save-dev  jsx语法的解析

 还要再配一个 .babelrc

 利用 webpack一些插件 做一些自动化的事
1. commonChunkPlugin(自带)

2. html-webpack-plugin（第三方实现） hash b762


css 也是可以进行规则的定义，把它解析成 css内容 
css-loader style-loader!css-loader!less-loader/sass-loader

