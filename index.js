const express = require('express');
const cors = require('cors');
const pg = require('pg').verbose();
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Database('./db.pg', (err) => {
    if (err) console.error(err);
    console.log('Connected to PostgreSQL');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);
    db.run(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    ingredients TEXT,
    instructions TEXT,
    pictures TEXT,
    userId INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)
  )`);
});

app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));