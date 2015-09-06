/**
 * Created by Hsuching on 15/9/5.
 * webpack --config webpack.config2.js
 */


module.exports = {
    entry:[
        './js/commonjs.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle2.js'
    }
};