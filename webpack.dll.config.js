const webpack = require('webpack')
module.exports = {
    entry:['jquery','axios'],
    output:{
        path: __dirname + '/dll',
        filename: 'dll_[name].js',
        library: '[name]_[hash]'
    },
    plugins:[
        new webpack.DllPlugin({
            path: __dirname + '/dll/[name]-manifest.json',
            name: '[name]_[hash]'
        })
    ]
}