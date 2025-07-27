const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a recipe

app.post("/recipes", async (req, res) => {
    try {
        const { title, ingredients, instructions, imageURLs } = req.body;
        const newRecipe = await pool.query(
            "INSERT INTO recipes (title, ingredients, instructions, imageURLs) VALUES($1, $2, $3, $4) RETURNING *",
            [title, ingredients, instructions, imageURLs]
        );
        res.json(newRecipe.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
});

//get all recipes

app.get("/recipes", async (req, res) => {
    try {
        const allRecipes = await pool.query("SELECT * FROM recipe");
        res.json(allRecipes.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a recipe

app.get("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM recipe WHERE recipe_id = $1", [
            id
        ]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a recipe

app.put("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateRecipe = await pool.query(
            "UPDATE recipe SET description = $1 WHERE recipe_id = $2",
            [description, id]
        );

        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a recipe

app.delete("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRecipe = await pool.query("DELETE FROM todo WHERE recipe_id = $1", [
            id
        ]);
        res.json("Recipe was deleted!");
    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});