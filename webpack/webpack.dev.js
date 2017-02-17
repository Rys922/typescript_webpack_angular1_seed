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
        extensions: [ '.ts', '.js', '.json'  , '.html'] , 
        modules: ["src", "node_modules"]
    },
    resolveLoader: {
        modules: ["src", "node_modules"]
    },
    devtool: 'source-map' , 
    plugins: [
         new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new CopyWebpackPlugin([
            
            { from: './resources/**/*', to: './' }
        ]), 
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.jquery': 'jquery'
        // })
    ],
    module:{
        rules: loaders
    }
};