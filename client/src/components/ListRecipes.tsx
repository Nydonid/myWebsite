import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../RecipeInterface";
import EditRecipeForm from "./EditRecipe"
import DeleteRecipeButton from "./DeleteRecipeButton";

interface ListRecipesProps {
    recipes: Recipe[];
}

const handleDelete = async ({ recipeId }: { recipeId: number }) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/recipes/${recipeId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.ok) {
                window.location.reload();
            } else {
                alert("Failed to delete recipe");
            }
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            alert("Error deleting recipe");
        }
    }
};

const ListRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const isLoggedIn = !!localStorage.getItem("token");

    const getRecipes = async () => {
        try {
            const response = await fetch("http://localhost:5000/recipes"); // TODO localhost sure wrong for production
            const jsonData = await response.json();
            setRecipes(Array.isArray(jsonData) ? jsonData : []);
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            setRecipes([]);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Fragment>
            {recipes.map((recipe) => (
                <div key={recipe.recipe_id} className="p-6 rounded-lg shadow">
                    <Link to={`/recipes/${recipe.recipe_id}`}>
                        <h2 className="text-xl font-semibold">{recipe.title}</h2>
                        {recipe.imageurls && (
                            <img src={recipe.imageurls[0]} alt={recipe.title} width="100" />
                        )}
                    </Link>
                    {isLoggedIn && (
                        <div className="mt-2">
                            <EditRecipeForm recipe={recipe} />
                            <DeleteRecipeButton recipeId={recipe.recipe_id}/>
                        </div>
                    )}
                </div>
            ))}
        </Fragment>
    );
};

export default ListRecipes;