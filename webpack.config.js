//webpack的配制文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode:'development',
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({//自动生生html页面
      title:'cyt webpack',
      template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
      filename:'index.html' //设置生成的内存页面名称
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    port:3000
  },
  module:{//配制所有第三方loader模块的
    rules:[//第三方模块的匹配规则
      {
        test:/\.css$/,
        use:[
          'style-loader','css-loader'
        ]
      },
      //处理less文件的loader
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      //处理sass文件的loader
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},

      //处理图片的loader
      {
        test:/\.(jpg|svg|png|gif)$/,
        use:[
          'file-loader'
        ]
      },
      //处理字体的loader
      {
        test:/\.(ttf|eot|woff|woff2|svg)$/,
        use:[
          'url-loader'
        ]
      },
      //webpack只能处理一部分es6语法，要借助第三方loader来处理高级语法，当第三方将高级语法转为低级语法后，webpack会将代码打包到bundle.js中
      /**
       * 通过babel可以将高级语法转化为低级语法，在webpack中可以运行如下两套命令安装如下两套包，安装babel相关的loader功能
       * babel-loader babel-core babel-plugin-transform-runtime
       * babel-preset-env babel-preset-stage-0
       * 打开webpack配制文件添加babel的匹配规则
       * 3、在项目根目录中新建一个.babelrc的配制文件，这个文件属于json格式
       * 在.babelrc中
       * 4、目前我们安装的@babel/preset-env是比较新的es语法插件，比如解决es6，es7的语法
       */
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude:/node_modules/ //排除node_modules中的文件，不用转换所有js文件，只要转换自己写的js文件即可
        //因为打包所有js会消耗cpu，很慢，而且打包完也不能正常运行项目
      },
      //安装vue的loader
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias:{//修改vue导入的包的路径
      //"vue$":"vue/dist/vue.js"
    }
  }
}