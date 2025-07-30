import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Ingredient, Recipe} from "../RecipeInterface";

function ViewRecipe() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipe = async () => {
        try {
            fetch(`http://localhost:5000/recipes/${id}`) // TODO localhost is sure wrong for production
                .then((res) => res.json())
                .then((data) => setRecipe(data))
                .catch((err) => console.error(err));
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            setRecipe({ recipe_id: 0, title: "Error from ViewRecipe.tsx", prep_time: "", description: "", instructions: [], imageurls: [], ingredients: []});
        }
    };

    useEffect(() => {
        getRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    console.log(recipe?.ingredients[1]);

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.prep_time}</p>
            <p>{recipe.description}</p>
            <p>Ingredients:</p>
            <ul>
                {recipe.ingredients
                    .filter((ingredient): ingredient is Ingredient => ingredient !== null)
                    .map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                    </li>
                ))}
            </ul>
            <p>Instructions: {recipe.instructions}</p>
            {recipe.imageurls && recipe.imageurls.length > 0 && (
                recipe.imageurls.map((url, index) => {
                    return <img key={index} src={url} alt={`Image ${index}`} width="200" />;
                })
            )}
        </div>
    );
}

export default ViewRecipe;