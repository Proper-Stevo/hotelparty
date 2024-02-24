const pgp = require('pg-promise')();

// Replace 'username', 'password', 'localhost', '5432', and 'database_name' with your actual database credentials
const connectionString = 'postgresql://username:password@localhost:5432/database_name';

const db = pgp(connectionString);

module.exports = db;
