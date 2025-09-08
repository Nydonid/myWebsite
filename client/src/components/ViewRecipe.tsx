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
        <div className="container mx-auto max-w-4xl p-6 bg-base-200 rounded-lg shadow-lg">
            <div className="card bg-neutral-50 border border-primary">
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: Title, Time, Description */}
                    <div className="space-y-4">
                        <h1 className="card-title text-3xl font-bold text-primary">{recipe.title}</h1>
                        <p className="text-secondary">{recipe.prep_time} min</p>
                        <p className="text-base-content">{recipe.description}</p>
                    </div>
                    {/* Right: First Image */}
                    {recipe.imageurls && recipe.imageurls.length > 0 && (
                        <figure>
                            <img
                                src={recipe.imageurls[0]}
                                alt={recipe.title}
                                className="rounded-lg object-cover w-full h-64"
                            />
                        </figure>
                    )}
                </div>
                <div className="card-body space-y-6">
                    {/* Ingredients List */}
                    <div>
                        <h2 className="text-xl font-semibold text-primary mb-2">Ingredients:</h2>
                        <ul className="list-disc list-inside space-y-2">
                            {recipe.ingredients
                                .filter((ingredient): ingredient is Ingredient => ingredient !== null)
                                .map((ingredient, index) => (
                                    <li key={index} className="text-base-content">
                                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    {/* Instructions List */}
                    <div>
                        <h2 className="text-xl font-semibold text-primary mb-2">Instructions:</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            {recipe.instructions.slice(0,0).map((step, index) => (
                                <li key={index} className="text-base-content">{step.trim()}</li>
                            ))}
                        </ol>
                    </div>
                    {/* Additional Images */}
                    {recipe.imageurls && recipe.imageurls.length > 1 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recipe.imageurls.slice(1).map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`Recipe image ${index + 2}`}
                                    className="rounded-lg object-cover w-full h-64"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewRecipe;