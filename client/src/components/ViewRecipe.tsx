import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe } from "../RecipeInterface";

function ViewRecipe() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipe = async () => {
        try {
            fetch(`http://localhost:5000/recipes/${id}`) // TODO localhost sure wrong for production
                .then((res) => res.json())
                .then((data) => setRecipe(data))
                .catch((err) => console.error(err));
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            setRecipe({ recipe_id: 0, title: `Error from ViewRecipe.tsx`, ingredients: [], instructions: [], imageurls: [] });
        }
    };

    useEffect(() => {
        getRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    console.log(recipe?.ingredients[1]);

    return (
        <div>
            <p>Morgee</p>
            <h1>{recipe.title}</h1>
            <p>Ingredients: {recipe.ingredients}</p>
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