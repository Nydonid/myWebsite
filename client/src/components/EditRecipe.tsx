import React, {useState, Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import {Ingredient, Recipe} from "../RecipeInterface";

const EditRecipe = ({ recipe }: { recipe: Recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [prep_time, setPrepTime] = useState(recipe.prep_time);
    const [description, setDescription] = useState(recipe.description);
    const [instructions, setInstructions] = useState(recipe.instructions ? recipe.instructions.join("; ") : ""); // Fallback to "", as undefined couldn't be split()
    const [imageURLs, setImageURLs] = useState(recipe.imageurls ? recipe.imageurls.join("; ") : "");
    const [ingredients, setIngredients] = useState<Ingredient[]>(recipe.ingredients);

    const updateRecipe = async () => {
        try {
            const body = {
                title,
                prep_time: prep_time || null,
                description: description || null,
                instructions: instructions.split(";").map((item) => item.trim()),
                imageURLs: imageURLs.split(";").map((item) => item.trim()),
                ingredients,
            };
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/recipes/${recipe.recipe_id}`, { // TODO replace localhost for production
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

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { ingredient_id: 0, recipe_id: recipe.recipe_id, amount: 0, unit: "", name: "" }]);
    };

    const handleIngredientChange = (index: number, field: string, value: string | number) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = { ...newIngredients[index], [field] : value };
        setIngredients(newIngredients);
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target={`#editRecipeModal${recipe.recipe_id}`}>
                Edit
            </button>
            <div className="modal fade" id={`editRecipeModal${recipe.recipe_id}`} tabIndex={-1} aria-labelledby="editRecipeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Recipe</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                    setTitle(recipe.title);
                                    setPrepTime(recipe.prep_time || "");
                                    setDescription(recipe.description || "");
                                    setInstructions(recipe.instructions.join("; "));
                                    setImageURLs(recipe.imageurls.join(", "));
                                    setIngredients(recipe.ingredients);
                                }}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" placeholder="Title" value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>
                            <input type="number" className="form-control mb-2" placeholder="Prep Time (minutes)" value={prep_time}
                                   onChange={(e) => setPrepTime(e.target.value)}/>
                            <textarea className="form-control mb-2" placeholder="Description" value={description}
                                      onChange={(e) => setDescription(e.target.value)}/>
                            <textarea className="form-control mb-2" placeholder="Instructions (semicolon-separated)" value={instructions}
                                      onChange={(e) => setInstructions(e.target.value)}/>
                            <input type="text" className="form-control mb-2" placeholder="Image URLs (comma-separated)" value={imageURLs}
                                   onChange={(e) => setImageURLs(e.target.value)}/>
                            {ingredients && ingredients.length > 0 ? (
                                ingredients.map((ingredient, index) => (
                                <div key={index} className="mb-2">
                                    <input type="number" className="form-control mb-1" placeholder="Amount" value={ingredient.amount}
                                           onChange={(e) => handleIngredientChange(index, "amount", Number(e.target.value))}
                                    />
                                    <input type="text" className="form-control mb-1" placeholder="Unit" value={ingredient.unit ?? ""}
                                           onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                                    />
                                    <input type="text" className="form-control mb-1" placeholder="Ingredient Name" value={ingredient.name}
                                        onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                                    />
                                </div>
                            ))
                            ) : (
                                <p>No ingredients set for this recipe</p>
                            )}
                            <button type="button" onClick={handleAddIngredient} className="btn btn-secondary mb-2">
                                Add Ingredient
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={updateRecipe}>
                                Save
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                                    setTitle(recipe.title);
                                    setPrepTime(recipe.prep_time || "");
                                    setDescription(recipe.description || "");
                                    setInstructions(recipe.instructions.join("; "));
                                    setImageURLs(recipe.imageurls.join(", "));
                                    setIngredients(recipe.ingredients);
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