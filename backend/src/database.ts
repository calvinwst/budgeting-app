import sqlite3 from "sqlite3";

const db = new sqlite3.Database("expenses.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});

//Create a table for the expenses
db.run(
  `
    CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL,
    category TEXT NOT NULL,
    notes TEXT
    )`,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Table created successfully");
  }
);

export default db;
