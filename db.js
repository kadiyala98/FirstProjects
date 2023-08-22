const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'kaddie',
  database: 'website_db',
  waitForConnections: true,
  connectionLimit: 10, // Adjust this based on your needs
  queueLimit: 0
});

module.exports = pool.promise();