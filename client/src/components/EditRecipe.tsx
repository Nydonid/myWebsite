import React, { Fragment, useState } from "react";

interface Recipe {
    recipe_id: number;
    title: string;
    ingredients: string[];
    instructions: string[];
    imageURLs: string[];
}

const EditRecipe = ({ recipe }: { recipe: Recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
    const [instructions, setInstructions] = useState(recipe.instructions.join("; "));
    const [imageURLs, setImageURLs] = useState(recipe.imageURLs.join(", "));

    const updateRecipe = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const body = {
                title,
                ingredients: ingredients.split(",").map((item) => item.trim()),
                instructions: instructions.split(";").map((item) => item.trim()),
                imageURLs: imageURLs.split(",").map((item) => item.trim()),
            };
            await fetch(`http://localhost:5000/recipes/${recipe.recipe_id}`, { // TODO localhost sure wrong for production
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location.reload(); // Avoid direct window.location assignment
        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${recipe.recipe_id}`}
            >
                Edit
            </button>

            <div
                className="modal"
                id={`id${recipe.recipe_id}`}
                onClick={() => {
                    setTitle(recipe.title);
                    setIngredients(recipe.ingredients.join(", "));
                    setInstructions(recipe.instructions.join("; "));
                    setImageURLs(recipe.imageURLs.join(", "));
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Recipe</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    setTitle(recipe.title);
                                    setIngredients(recipe.ingredients.join(", "));
                                    setInstructions(recipe.instructions.join("; "));
                                    setImageURLs(recipe.imageURLs.join(", "));
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
                                onClick={(e) => updateRecipe(e)}
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
                                    setImageURLs(recipe.imageURLs.join(", "));
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditRecipe;