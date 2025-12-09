import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandling from './middlewares/errorHandler.js';
import { createUserTable } from './data/createUserTable.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api', userRoutes);


// error handling middleware
app.use(errorHandling);

// create a table before starting the server
createUserTable();

// Test route
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT current_database()");
    res.send(`Database connected: ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Error connecting to DB:", error);
    res.status(500).send("Database connection error");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
