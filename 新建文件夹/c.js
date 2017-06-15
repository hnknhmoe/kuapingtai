var db = require('./b.js');
var mssql = require('mssql');

db.sql('insert into name(id,name) values(2,2)) ', function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('用户总数为 :', result.length);
});