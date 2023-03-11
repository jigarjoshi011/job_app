
require('dotenv').config()
const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env. database,
     multipleStatements : true

});

conn.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Database connected`);
        }
})

module.exports = conn;