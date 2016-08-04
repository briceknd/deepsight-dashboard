'use strict';

module.exports = function(app) {
    // inject:start
    require('./createAudience')(app);
    require('./mainView')(app);
    require('./manageAudience')(app);
    require('./myData')(app);
    // inject:end
};