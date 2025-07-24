const express = require('express');
const sqlite3 = require('pg').verbose();
const auth = require('../middleware/auth');
const router = express.Router();
const db = new pg.Database('./db.pg');

router.get('/', auth, (req, res) => {
    db.all('SELECT * FROM recipes WHERE userId = ?', [req.user.userId], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Server error' });
        res.json(rows);
    });
});

router.post('/', auth, (req, res) => {
    const { title, ingredients, instructions } = req.body;
    db.run(
        'INSERT INTO recipes (title, ingredients, instructions, userId) VALUES (?, ?, ?, ?)',
        [title, ingredients, instructions, req.user.userId],
        (err) => {
            if (err) return res.status(500).json({ error: 'Server error' });
            res.status(201).json({ message: 'Recipe added' });
        }
    );
});

module.exports = router;