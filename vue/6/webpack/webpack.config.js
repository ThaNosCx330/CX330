const path = require('path')

//导入预览页面的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

//创建实例对象
const HtmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',    //  指定预览模板的路径
    filename: 'index.html'          //  指定生成的文件的名称，存在内存中，真实不存在
})
//导入vue-loader
const { VueLoaderPlugin } = require('vue-loader')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode : 'development',
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: './'
    },

    plugins:[ HtmlPlugin, new VueLoaderPlugin()],

    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader',]},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test: /\.js$/,use:['babel-loader'],exclude:/node_modules/},
            { test: /\.vue$/, loader: 'vue-loader'},
        ]
    }
}