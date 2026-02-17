import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../RecipeInterface";
import EditRecipeForm from "./EditRecipe"
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipe from "./EditRecipe";

interface ListRecipesProps {
    recipes: Recipe[];
}

const ListRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const isLoggedIn = !!localStorage.getItem("token");

    const getRecipes = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || "";
            const response = await fetch(`${apiUrl}/api/recipes`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
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
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-screen items-stretch px-[12vw] justify-items-center">
                {recipes.map((recipe) => (
                    <div key={recipe.recipe_id} className="card bg-accent/4 dark:bg-accent/30 m-4 shadow-sm transition-shadow">
                        <Link to={`/recipes/${recipe.recipe_id}`}>
                        <figure className="px-4 pt-4">
                            {recipe.imageurls && (
                                <img className="rounded-lg object-cover w-fit hover:brightness-110 transition-filter duration-300" src={recipe.imageurls[0]} alt={recipe.title}/>
                            )}
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg">{recipe.title}</h2>
                            <p className="text-secondary">{recipe.prep_time} min</p>
                        </div>
                    </Link>
                    {isLoggedIn && (
                        <div className="card-actions justify-end p-4">
                            <EditRecipe recipe={recipe} />
                            <DeleteRecipeButton recipe={recipe} />
                        </div>
                    )}
                </div>
                ))}
            </article>
        </Fragment>
    );
};

export default ListRecipes;