'use strict';
var controllername = 'myData';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        console.log("test mydata");
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
