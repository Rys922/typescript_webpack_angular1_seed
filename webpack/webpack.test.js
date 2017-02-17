var loaders = require("./loaders");
var webpack = require('webpack');
module.exports = {

  output: {
    filename: 'build.js',
    path: 'tmp'
  },
  devtool: 'inline-source-map',
  //target: "node" , 
  resolve: {

    extensions: ['.ts', '.js', '.json'],
    modules: ["src", "node_modules"]
  },
  resolveLoader: {
    modules: ["src", "node_modules"]
  },
  devtool: "source-map-inline",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null, // if no value is provided the sourcemap is inlined
      test: /\.(ts|js)($|\?)/i // process .js and .ts files only
    })
  ],
  module: {
    loaders: loaders,
    // postLoaders: [
    //   {
    //     test: /^((?!\.spec\.ts).)*.ts$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'istanbul-instrumenter'
    //   }
    // ]
  }
};