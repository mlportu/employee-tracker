const mysql = require('mysql2');

//Creates connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Grandview28640892$',
    database: 'employees_db'
});

connection.connect(err => {
    if(err) throw err;
    console.log('connected as id' + connection.threadId);
    afterConnection();
});

afterConnection = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if(err) throw err;
        console.log(res);
        connection.end();
    });
};