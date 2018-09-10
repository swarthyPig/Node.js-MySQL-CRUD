var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '909090',
    database: 'rhks12345'
});
db.connect();

module.exports = db; // 꺼내놓을 api가 하나이면