// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,     // Your host, e.g., 'localhost'
    user: process.env.MYSQL_USER,     // Your database user
    database: process.env.MYSQL_DB,   // Your database name
    password: process.env.MYSQL_PASS  // Your database password
});

module.exports = pool.promise();
