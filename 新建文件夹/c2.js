var sqlserver = require('./b2.js');

sqlserver.sql('select * from name', function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});