import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
    recipe_id: number;
    title: string;
    ingredients: string[];
    instructions: string[];
    imageURLs: string[];
}

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
            setRecipe({ recipe_id: 0, title: "Error answer from ViewRecipe.tsx", ingredients: [], instructions: [], imageURLs: [] });        }
    };

    useEffect(() => {
        getRecipe();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            {recipe.imageURLs && recipe.imageURLs.map((url, index) => (
                <img key={index} src={url} alt={`Image ${index}`} width="200" />
            ))}
        </div>
    );
}

export default ViewRecipe;