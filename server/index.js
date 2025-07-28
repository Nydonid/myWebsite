const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const jwt = require("jsonwebtoken");

require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json()); //req.body

// middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, "your_secret_key", (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
};

//ROUTES//

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    // Validate credentials (add your logic, e.g., check against DB)
    if (username === process.env.FRONTEND_USER && password === process.env.FRONTEND_PASSWORD) {
        const token = jwt.sign({ username }, "your_secret_key", { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});

//create a recipe

app.post("/recipes", authenticateToken, async (req, res) => {
    try {
        const { title, ingredients, instructions, imageURLs } = req.body;
        const newRecipe = await pool.query(
            "INSERT INTO recipes (title, ingredients, instructions, imageURLs) VALUES($1, $2, $3, $4) RETURNING *",
            [title, ingredients, instructions, imageURLs || []]
        );
        res.json(newRecipe.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//get all recipes (for recipes list)
app.get("/recipes", async (req, res) => {
    try {
        const allRecipes = await pool.query("SELECT recipe_id, title, imageURLs[0] FROM recipes");
        res.json(allRecipes.rows || []);
        console.log(allRecipes.rows); // TODO delete this line, for debug
    } catch (err) {
        console.error(err.message);
    }
});

//get a recipe (for detailled recipe view)
app.get("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await pool.query("SELECT * FROM recipes WHERE recipe_id = $1", [
            id
        ]);
        res.json(recipe.rows[0] || []);
    } catch (err) {
        console.error(err.message);
    }
});

//update a recipe
app.put("/recipes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const updateRecipe = await pool.query(
            "UPDATE recipe SET description = $1 WHERE recipe_id = $2",
            [id]
        );
        res.json("Recipe.tsx was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a recipe
app.delete("/recipes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecipe = await pool.query("DELETE FROM recipe WHERE recipe_id = $1", [
            id
        ]);
        res.json("Recipe.tsx was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});