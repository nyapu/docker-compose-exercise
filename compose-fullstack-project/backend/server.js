const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
    host: "db",        // service name, not localhost
    user: "user",
    password: "userpass",
    database: "myapp"
});

app.get("/", (req, res) => {
    db.query("SELECT 'Backend + DB Working!' as msg", (err, rows) => {
        res.send(rows);
    });
});

app.listen(5000,"0.0.0.0", () => console.log("Backend running on port 5000"));

