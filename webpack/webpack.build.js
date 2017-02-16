var loaders = require("./loaders");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: ['./src/app.ts'],
    output: {
        filename: 'build.js',
        path: 'dist'
    },
    
    resolve: {
        //root: __dirname,
        extensions: [ '.ts', '.js', '.json' ] , 
        modules: ["src", "node_modules"]
    },
    resolveLoader: {
        modules: ["src", "node_modules"]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin(
            {
                warning: false,
                mangle: true,
                comments: false
            }
        ),
        new CopyWebpackPlugin([
            
            { from: './resources/**/*', to: './' }
        ]), 

    ],
    module:{
        rules: loaders
    }
};