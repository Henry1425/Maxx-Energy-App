const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL database connection configuration
const db = mysql.createConnection({
  host: 'localhost',     // Laragon uses 'localhost' by default
  user: 'root',          // Default username
  password: '',          // Default password
  database: 'maxgendata'    // Your database name
});

// Connect to the database
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example route to query the database
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send('Database query error');
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


