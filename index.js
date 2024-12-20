const express = require('express')
const mysql = require("mysql")
const app = express()

const connection = mysql.createConnection({
  host      : '194.233.70.154',
  user      : 'boba',
  password  : '12345678',
  database  : 'belajar'
});

connection.connect();

app.get('/siswa', function (req, res) {
  connection.query('SELECT nis, nama FROM siswa', function (error, results, fields) {
    res.json(results)
  });
});

app.get('/agama', function (req, res) {
  connection.query('SELECT * FROM agama', function (error, results, fields) {
    res.json(results)
  });
});

app.listen(3000)