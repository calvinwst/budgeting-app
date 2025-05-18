import express from "express";
import db from "./database";
import cors from "cors";

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Root route
app.get("/", (req, res) => {
  "Welcome to the Expense Tracker API";
});

//Get all expenses
app.get('/expenses', (req, res) => {
    db.all('SELECT * FROM expenses', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(rows);
    });
  });

  //Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
