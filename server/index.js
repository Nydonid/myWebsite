require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env' : '.env.local'
});

const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");
const jwt = require("jsonwebtoken");
const api = express.Router();
const port = 5000;

//middleware
app.use(express.json()); //req.body
app.use(cors());


// middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
};

//ROUTES//

//get test
api.get("/test", async (req, res) => {
    res.send('Hello from Express');
});

// Login route
api.post("/login", async (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.FRONTEND_USER && password === process.env.FRONTEND_PASSWORD) { // Validate credentials (check against DB)
        const token = jwt.sign({ username }, process.env.JWT_TOKEN, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ error: "Invalid credentials" });
    }
});

//create a recipe
api.post("/recipes", authenticateToken, async (req, res) => {
    try {
        const { title, prep_time, description, instructions, imageurls, ingredients } = req.body; // define attributes which can be set to push recipe to db
        if (!title || !ingredients?.length || !instructions?.length) { // return error 400 if NOT NULL attributes are not set.
            return res.status(400).json({ error: "Title, ingredients, and insert_recipes are required" });
        }
/*        const newRecipe = await pool.query( // add attributes from form to db
            "INSERT INTO recipes (title, prep_time, description, insert_recipes, imageURLs) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [title, prep_time, description, insert_recipes, imageURLs || []]
        );
        const recipeId = newRecipe.rows[0].recipe_id;*/

        const client = await pool.connect();
        try {
            await client.query("BEGIN");
            const newRecipe = await client.query(
                "INSERT INTO recipes (title, prep_time, description, insert_recipes, imageurls) VALUES($1, $2, $3, $4, $5) RETURNING *",
                [title, prep_time, description, instructions, imageurls || []]
            );
            const recipeId = newRecipe.rows[0].recipe_id;
            for (const { amount, unit, name } of ingredients) {
                await client.query(
                    "INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES($1, $2, $3, $4)",
                    [recipeId, amount, unit || null, name]
                );
            }
            await client.query("COMMIT");
            const fullRecipe = await client.query(
                "SELECT r.*, ARRAY_AGG(ROW_TO_JSON(i)) AS ingredients FROM recipes r LEFT JOIN ingredients i ON r.recipe_id = i.recipe_id WHERE r.recipe_id = $1 GROUP BY r.recipe_id",
                [recipeId]
            );
            res.json(fullRecipe.rows[0]);
        } catch (err) {
            await client.query("ROLLBACK");
            throw err;
        } finally {
            client.release();
        }
        res.json(newRecipe.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//get all recipes (for recipes list)
api.get("/recipes", async (req, res) => {
    try {
        const allRecipes = await pool.query("SELECT recipe_id, title, prep_time, imageURLs FROM recipes"); // TODO find solution to pass only first image correctly
        res.json(allRecipes.rows || []);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//get a recipe (for detailled recipe view)
api.get("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await pool.query(
/*
            "SELECT r.* FROM recipes r WHERE recipe_id = $1,"
*/
            "SELECT r.*, ARRAY_AGG(ROW_TO_JSON(i)) AS ingredients FROM recipes r LEFT JOIN ingredients i ON r.recipe_id = i.recipe_id WHERE r.recipe_id = $1 GROUP BY r.recipe_id",
             [
            id
        ]);
        res.json(recipe.rows[0] || []);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//update a recipe
api.put("/recipes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, prep_time, description, instructions, imageurls, ingredients } = req.body;

        console.log("PUT request body:", req.body);
        console.log("Ingredients:", ingredients);
        console.log("Image URLs:", imageurls);

        const client = await pool.connect();
        try {
            await client.query("BEGIN");
            const updateRecipe = await client.query(
                "UPDATE recipes SET title = $1, prep_time = $2, description = $3, insert_recipes = $4, imageurls = $5 WHERE recipe_id = $6 RETURNING *",
                [title, prep_time, description, instructions, imageurls || [], id]
            );
            await client.query("DELETE FROM ingredients WHERE recipe_id = $1", [id]);
            for (const { amount, unit, name } of ingredients) {
                await client.query(
                    "INSERT INTO ingredients (recipe_id, amount, unit, name) VALUES($1, $2, $3, $4)",
                    [id, amount, unit || null, name]
                );
            }

            await client.query("COMMIT");
            const fullRecipe = await client.query(
                "SELECT r.*, ARRAY_AGG(ROW_TO_JSON(i)) AS ingredients FROM recipes r LEFT JOIN ingredients i ON r.recipe_id = i.recipe_id WHERE r.recipe_id = $1 GROUP BY r.recipe_id",
                [id]
            );
            res.json(fullRecipe.rows[0] || {});

        } catch (err) {
            await client.query("ROLLBACK");
            throw err;
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//delete a recipe
api.delete("/recipes/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecipe = await pool.query("DELETE FROM recipes WHERE recipe_id = $1", [
            id
        ]);
        res.json(`Recipe was deleted!`);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

app.use("/api", api);
app.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port ${port}`);
})