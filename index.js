const express = require('express')
const mysql = require("mysql")
const cors = require("cors")
global.app = express()

global.connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : '',
  database  : 'bacod_cofeshop'
});

app.use(cors());
app.use(express.json());
connection.connect();

require("./module/menu")

app.listen(3000)