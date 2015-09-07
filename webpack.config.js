/**
 * Created by Hsuching on 15/9/5.
 */
var MinChunkSizePlugin = require("webpack/lib/optimize/MinChunkSizePlugin");
var webpack = require('webpack');
module.exports = {
    entry:[

            'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server',
            './js/entry.js' // Your appʼs entry point

        ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    resolve:{
      extensions:['','.js','.css','.jsx','.less','.sass']
    },
    module: {
        loaders: [
            {test: /\.jsx?$/,exclude:/node_modules/,loader:'react-hot!jsx-loader?harmony'}
        ]
    },
    externals:{
//        "react":"React",
        "jquery":"jQuery"
//        "react":{
//            root:"react",
//            commonjs: "react",
//            commonjs2: "react",
//            amd: "react"
//        }
//        "jquery": {
//            root: "jQuery",
//            commonjs: "jQuery",
//            commonjs2: "jQuery",
//            amd: "jQuery"
//        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new MinChunkSizePlugin({minChunkSize: 10000})
    ]
};