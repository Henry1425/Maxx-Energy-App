const express = require("express");
// const cors = require("cors");

const mysql = require('mysql2');
const port = 3000;//5501
const app = express();

// const corsOptions = {
//   origin: `http://127.0.0.1:${port}`
// };

// app.use(cors(corsOptions));

const fs = require('fs');

const DCP = "./txt/DCP.txt";
const ACP = "./txt/ACP.txt";
const DY = "./txt/DY.txt";
const TY = "./txt/TY.txt";

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'maxgendata'
});

connection.connect();

connection.query('SELECT * FROM `power`', function (error, results, fields) {
  let DCPData = "";
  let ACPData = "";
  let DYData = "";
  let TYData = "";
  let sep = "<seperator>";
  for (let i = 0; i < results.length; i++) {
    if (results[i].title == "DC Power") {
      DCPData = results[i].title + sep + results[i].images + sep + results[i].description + sep + results[i].extra;
    }
    else if (results[i].title == "AC Power") {
      ACPData = results[i].title + sep + results[i].images + sep + results[i].description + sep + results[i].extra;
    }
    else if (results[i].title == "Daily Yield") {
      DYData = results[i].title + sep + results[i].images + sep + results[i].description + sep + results[i].extra;
    }
    else if (results[i].title == "Total Yield") {
      TYData = results[i].title + sep + results[i].images + sep + results[i].description + sep + results[i].extra;
    }
  }
  fs.writeFile(DCP, DCPData, (err) => {if (err) throw err;});
  fs.writeFile(ACP, ACPData, (err) => {if (err) throw err;});
  fs.writeFile(DY, DYData, (err) => {if (err) throw err;});
  fs.writeFile(TY, TYData, (err) => {if (err) throw err;});
});

connection.end();

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});