const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 5500; // You can use any port you prefer (e.g., 3000)
const db = mysql.createConnection({
  host: 'Localhost', // Replace with your database host if it's not on your local machine
  user: 'root',
  password: 'kaddie',
  database: 'website_db',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
app.get('/', (req, res) => {
  res.send('User logged in');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


