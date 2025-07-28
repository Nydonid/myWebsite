import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../RecipeInterface";


const ListRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

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
                </div>
            ))}
        </Fragment>
    );
};

export default ListRecipes;