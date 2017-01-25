'use strict';

var webpackConfig = require('./webpack/webpack.test.js');

webpackConfig.entry = {};

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,
        files: [
	   {   pattern: '**/*.js.map', included: false}, 
           
            './src/test.ts', 
            {   pattern: './src/**/*.spec.ts', included: true}, 
        ],
        babelPreprocessor: {
            options: {
                presets: ['es6']
            }
        },
        preprocessors: {
            'src/**/*.spec.ts': ['webpack'] , 
            'src/test.ts': ['webpack'],
            'src/**/!(*.spec)+(.js)': ['coverage']
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: webpackConfig,
        reporters: [
            'dots',
            'spec',
            'coverage'
        ],
        coverageReporter: {
            reporters: [
                {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'html'
                },{
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'cobertura'
                }, {
                    dir: 'reports/coverage/',
                    subdir: '.',
                    type: 'json'
                }
            ]
        }
    });
};
