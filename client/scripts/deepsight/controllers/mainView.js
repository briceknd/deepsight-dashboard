'use strict';
var controllername = 'mainView';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        console.log('hello bric');
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
