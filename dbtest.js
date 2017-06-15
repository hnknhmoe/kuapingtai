var db = require('./mysql.js');
var sql = 'SELECT count(*) as count from a';
db.query(sql, function(err, rows, fields) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('用户数量 : ', rows[0].count);
});