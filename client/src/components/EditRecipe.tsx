import React, {useState, Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../RecipeInterface";

const EditRecipe = ({ recipe }: { recipe: Recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
    const [instructions, setInstructions] = useState(recipe.instructions.join("; "));
    const [imageURLs, setImageURLs] = useState(recipe.imageurls.join(", "));
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

    const updateRecipe = async () => {
        try {
            const body = {
                title,
                ingredients: ingredients.split(",").map((item) => item.trim()),
                instructions: instructions.split(";").map((item) => item.trim()),
                imageURLs: imageURLs.split(",").map((item) => item.trim()),
            };
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/recipes/${recipe.recipe_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                window.location.reload();
            } else {
                alert("Failed to update recipe");
            }
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            alert("Error updating recipe");
        }
    };

    return (
        <article>
            <Fragment>
                <h1 className="text-center mt-5">Recipe Edit</h1>
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
            <div>
                <button
                    type="button"
                    className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target={`#id${recipe.recipe_id}`}
                >
                    Edit
                </button>

                <div
                    className="modal fade"
                    id={`id${recipe.recipe_id}`}
                    tabIndex={-1}
                    aria-labelledby="editRecipeModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Recipe</h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => {
                                        setTitle(recipe.title);
                                        setIngredients(recipe.ingredients.join(", "));
                                        setInstructions(recipe.instructions.join("; "));
                                        setImageURLs(recipe.imageurls.join(", "));
                                    }}
                                ></button>
                            </div>

                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <textarea
                                    className="form-control mb-2"
                                    placeholder="Ingredients (comma-separated)"
                                    value={ingredients}
                                    onChange={(e) => setIngredients(e.target.value)}
                                />
                                <textarea
                                    className="form-control mb-2"
                                    placeholder="Instructions (semicolon-separated)"
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Image URLs (comma-separated)"
                                    value={imageURLs}
                                    onChange={(e) => setImageURLs(e.target.value)}
                                />
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-bs-dismiss="modal"
                                    onClick={updateRecipe}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        setTitle(recipe.title);
                                        setIngredients(recipe.ingredients.join(", "));
                                        setInstructions(recipe.instructions.join("; "));
                                        setImageURLs(recipe.imageurls.join(", "));
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default EditRecipe;