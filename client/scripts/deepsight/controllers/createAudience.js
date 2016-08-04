'use strict';
var controllername = 'createAudience';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        console.log("test create audience");
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
