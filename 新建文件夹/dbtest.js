var db = require('./mysql.js');
var sql = 'insert into a values(3,"gdsz")';
db.query(sql, function(err, rows, fields) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('用户数量 : ', rows);
});