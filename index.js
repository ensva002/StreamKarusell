const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));
app.use(express.json())

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');


// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//database
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS mytable (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      inputValue TEXT
    )`);
});

//Save
