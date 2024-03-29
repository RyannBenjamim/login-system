const mysql = require("mysql");

require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((error) => {
  if (!error) {
    console.log("connected to database");
  } else {
    throw error;
  }
});

module.exports = db;
