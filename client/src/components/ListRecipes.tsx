import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../RecipeInterface";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipe from "./EditRecipe";

const ListRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = !!localStorage.getItem("token");

    const getRecipes = async () => {
        setIsLoading(true);
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
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <Fragment>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div key={recipe.recipe_id} className="card max-w-96 border-2 border-base-300 p-1 dark:border-none dark:bg-base-200 hover:bg-base-200 dark:hover:bg-base-300 rounded-lg m-4 shadow-sm transition-shadow">
                            <Link to={`/recipes/${recipe.recipe_id}`}>
                                <figure className="px-4 pt-4">
                                    {recipe.imageurls && recipe.imageurls.length > 0 && (
                                        <img className="rounded-lg object-cover w-full h-48 hover:brightness-110 transition-filter duration-300" src={recipe.imageurls[0]} alt={recipe.title}/>
                                    )}
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg">{recipe.title}</h2>
                                    <p className="text-accent">{recipe.prep_time} min</p>
                                </div>
                            </Link>
                            {isLoggedIn && (
                                <div className="card-actions justify-end p-4">
                                    <EditRecipe recipe={recipe} />
                                    <DeleteRecipeButton recipe={recipe} />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center py-10 opacity-60">Keine Rezepte gefunden.</p>
                )}
            </article>
        </Fragment>
    );
};

export default ListRecipes;
