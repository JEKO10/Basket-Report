const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3001;
const db = mysql.createPool({
  user: process.env.dbUser,
  host: process.env.dbHost,
  password: process.env.dbPassword,
  database: process.env.dbDatabase,
});
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

app.post("/register", (req, res) => {
  let { username, email, password } = req.body;
  username = username.trim();
  email = email.trim();
  password = password.trim();

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
    [username, email, password],
    (err, result) => {
      if (err) {
        res.send({ message: err.sqlMessage });
      } else {
        res.send({ message: "User registered successfully" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) res.send({ err: err });
      

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Email and password are not matching!" });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log("Running");
});
