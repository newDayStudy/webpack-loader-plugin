const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPoll = HappyPack.ThreadPool({size: os.cpus().length})
const copyWebpackPlugin = require('copy-webpack-plugin')
const myPlugin = require('./plugin/myPlugin')
module.exports = {
    mode: 'development',
    entry: './app.js',
    output:{
        path: __dirname + '/dist',
        filename: '[name].[hash].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: './myloader.js'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "test":{a:1}
        }),
        new htmlWebpackPlugin({
            filename:__dirname + '/dist/index.html',
            template: 'index.html',
            inject:true
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jquery':"jquery",
            "axios":"axios"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DllReferencePlugin({
            manifest:require('./dll/main-manifest.json')
        }),
        new copyWebpackPlugin([
            {
                from: __dirname + '/dll',
                to: __dirname + '/dist',
                ignore: ['.*']
            }
        ]),
        new myPlugin()
        // new HappyPack({
        //     id: 'babel-loader',
        //     // 共享进程池
        //     threadPool: happyThreadPoll,
        //     //允许输出日志
        //     verbose:true
        // })
    ]
}