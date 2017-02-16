'use strict';

var webpackConfig = require('./webpack/webpack.test.js');

webpackConfig.entry = null;

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: [


            
            './src/test.ts',
            {
                pattern: './src/**/*.spec.ts',
                included: true
            },
        ],
        babelPreprocessor: {
            options: {
                presets: ['es6']
            }
        },
        
        preprocessors: {
            'src/**/*.spec.ts': ['webpack' , 'sourcemap'] ,
            'src/test.ts': ['webpack' ,   'sourcemap'],
            
        },
        webpackMiddleware: {
            stats: {
                chunkModules: true,
                colors: true
            }
        },
        webpack: webpackConfig,
        reporters: [
            'dots',
            'spec',
        ],
         mime: {
            'text/x-typescript': ['ts','tsx']
        },

  
    });
};