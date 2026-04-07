import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Ingredient, Recipe} from "../RecipeInterface";

function ViewRecipe() {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<Recipe>();

    const getRecipe = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || "";
            fetch(`${apiUrl}/api/recipes/${id}`)
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

    if (!recipe) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    console.log(recipe?.ingredients[1]);

    return (
        <div className="space-y-8 max-w-4xl mx-auto mt-10 ml-6 mr-6 lg:ml-[22vw]">
            <div className="space-y-4">
                {recipe.imageurls && recipe.imageurls.length > 0 && (
                    <img
                        src={recipe.imageurls[0]}
                        alt={recipe.title}
                        className="rounded-lg object-cover w-full hover:brightness-110 transition-filter duration-300"
                    />
                )}
                <h1 className="text-3xl font-bold text-primary">{recipe.title}</h1>
                <p className="text-secondary">{recipe.prep_time} min</p>
                <p className="text-base-content">{recipe.description}</p>
            </div>
            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-primary mb-2">Zutaten:</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <ul className="list-disc list-inside space-y-2">
                        {recipe.ingredients
                            .filter((ingredient): ingredient is Ingredient => ingredient !== null)
                            .map((ingredient, index) => (
                                <li key={index} className="text-base-content">
                                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                                </li>
                            ))}
                    </ul>
                    {recipe.imageurls && recipe.imageurls.length > 1 && (
                        <img
                            src={recipe.imageurls[1]}
                            alt={recipe.title}
                            className="rounded-lg object-cover w-full hover:brightness-110 transition-filter duration-300"
                        />
                    )}
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-primary mb-2">Und so wird's gemacht:</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        {recipe.instructions.join(';').split(';').map((step, index) => (
                            <li key={index} className="text-base-content">{step.trim()}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default ViewRecipe;