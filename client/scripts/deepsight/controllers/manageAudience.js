'use strict';
var controllername = 'manageAudience';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [];

    function controller() {
        var vm = this;
        vm.controllername = fullname;

        console.log("test manage audience");
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
