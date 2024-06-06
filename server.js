const express = require("express");
// const cors = require("cors");

const mysql = require('mysql2');
const port = 3000;//5501
const app = express();

// const corsOptions = {
//   origin: `http://127.0.0.1:${port}`
// };

const cors = require('cors');

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Type', 'Authorization'],
}));

// // MySQL database connection configuration
// const db = mysql.createConnection({
//   host: 'localhost',     // Laragon uses 'localhost' by default
//   user: 'root',          // Default username
//   password: '',          // Default password
//   database: 'maxgendata'    // Your database name
// });

// // Connect to the database
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL database');
// });


// app.get('/getData', (req, res) => {
//   connection.query('SELECT * FROM `maxgen_power`', function (error, results, fields) {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     res.send(results);
//   });
// });



// // Basic route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Example route to query the database
// app.get('/', (req, res) => {
//   db.query('SELECT * FROM maxgen_power', (err, results) => {
//     if (err) {
//       return res.status(500).send('Database query error');
//     }
//     res.json(results);
//     console.log(results);
//   });
// });


// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// app.get('/data', (req, res) => {
//   res.sendFile(__dirname + '/DataPage.html');
// });

// app.get('/data/power', (req, res) => {
//   db.query('SELECT * FROM maxgen_power', (err, results) => {
//     if (err) {
//       return res.status(500).send('Database query error');
//     }
//     res.json(results);
//     console.log(results);
//   });
// });

// chris's Code


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'maxgendata'
});
connection.connect();
connection.query('SELECT * FROM `maxgen_power`', function (error, results, fields) {
  console.log(results);
});
connection.end();

app.get('/DataPage.html', (req, res) => {
  res.send('Hello World!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});





