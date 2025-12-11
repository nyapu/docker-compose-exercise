const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// Signup API
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, password],
    (err) => {
      if (err) return res.json({ message: "Signup failed!" });
      res.json({ message: "Signup successful!" });
    }
  );
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (result.length > 0) return res.json({ message: "Login successful!" });
      res.json({ message: "Invalid credentials!" });
    }
  );
});

app.listen(5000, () => console.log("Backend running on port 5000"));

