//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: 'src/app',

        files: [
            '../../node_modules/angular/angular.js',
            '../../node_modules/angular-ui-router/release/angular-ui-router.js',
            '../../node_modules/angular-mocks/angular-mocks.js',
            '../../node_modules/angular-test-runner/angular-test-runner.js',
            '../../node_modules/sinon/lib/sinon.js',
            '../../node_modules/lodash/lodash.js',
            '../../src/app/notes/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine-jquery', 'jasmine'],

        browsers: ['Firefox'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-babel-preprocessor',
            'karma-jasmine-jquery',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            '**/*.js': ['babel'],
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
            },
        }

    });
};
