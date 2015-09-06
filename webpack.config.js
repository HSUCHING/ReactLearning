/**
 * Created by Hsuching on 15/9/5.
 */

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
    module: {
        loaders: [
            {test: /\.jsx?$/,exclude:/node_modules/,loader:'react-hot!jsx-loader?harmony'}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};