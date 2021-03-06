'use strict';

var namespace = 'main';
// fix protractor issue
// if (window.location.toString().indexOf('localhost:5555') > 0) {
//     window.name = 'NG_DEFER_BOOTSTRAP!NG_ENABLE_DEBUG_INFO!';
// }
var angular = require('angular');

var app = angular.module(namespace, [
    // inject:modules start
    require('./deepsight')(namespace).name
    // inject:modules end
]);

// if (process.env.SENTRY_MODE === 'prod') {
//     var configCompileDeps = ['$compileProvider'];
//     var configCompile = function($compileProvider) {
//         $compileProvider.debugInfoEnabled(false);
//     };
//     configCompile.$inject = configCompileDeps;
//     app.config(configCompile);
// }

var runDeps = [];
var run = function() {
};

run.$inject = runDeps;
app.run(run);

module.exports = app;