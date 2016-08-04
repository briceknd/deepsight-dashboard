'use strict';
var angular = require('angular');
require('angular-ui-router');

var modulename = 'deepsight';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var app = angular.module(fullname, ['ui.router', ]);
    // inject:folders start
    require('./controllers')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url: '/home',
            template: require('./views/home.html'),
            controller: fullname + '.mainView',
            controllerAs: 'vm'
        }).state('home.createaudience', {
            url: '/createaudience',
            template: require('./views/createAudience.html'),
            controller: fullname + '.createAudience',
            controllerAs: 'vm'
        }).state('home.manageaudience', {
            url: '/manageaudience',
            template: require('./views/manageAudience.html'),
            controller: fullname + '.manageAudience',
            controllerAs: 'vm'
        }).state('home.mydata', {
            url: '/mydata',
            template: require('./views/myData.html'),
            controller: fullname + '.myData',
            controllerAs: 'vm'
        });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};