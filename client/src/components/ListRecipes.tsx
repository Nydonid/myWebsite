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
            const response = await fetch("http://localhost:5000/recipes"); // TODO localhost sure wrong for production
            const jsonData = await response.json();
            console.log(jsonData);
            console.log(response);
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
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-xl mx-auto p-4 justify-items-center">
                {recipes.map((recipe) => (
                <div key={recipe.recipe_id} className="card bg-accent-content/10 w-96 shadow-md">
                    <Link to={`/recipes/${recipe.recipe_id}`}>
                        <figure className="px-4 pt-4">
                            {recipe.imageurls && (
                                <img
                                    className="rounded-lg object-cover h-48 w-fit"
                                    src={recipe.imageurls[0]}
                                    alt={recipe.title}
                                />
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