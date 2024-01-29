const express = require("express");
require("dotenv").config();
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3001;

const db = mysql.createPool({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbDatabase,
});

app.get("/", (req, res) => {
  res.send("aleska");
});

app.listen(PORT, () => {
  console.log("Running");
});
