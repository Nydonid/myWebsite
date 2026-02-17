import React, {useState, Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import {Ingredient, Recipe} from "../RecipeInterface";

const EditRecipe = ({ recipe }: { recipe: Recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [prep_time, setPrepTime] = useState(recipe.prep_time);
    const [description, setDescription] = useState(recipe.description);
    const [instructions, setInstructions] = useState(recipe.instructions ? recipe.instructions.join("; ") : ""); // Fallback to "", as undefined couldn't be split()
    const [imageURLs, setImageURLs] = useState(recipe.imageurls ? recipe.imageurls.join(", ") : "");
    const [ingredients, setIngredients] = useState<Ingredient[]>(
        recipe.ingredients && recipe.ingredients.length > 0
            ? recipe.ingredients
            : [{ ingredient_id: 0, recipe_id: recipe.recipe_id, amount: 0, unit: null, name: "" }]
    );
    const [isOpen, setIsOpen] = useState(false);

    const onSubmitFormEdit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !ingredients || !instructions) { // Additional to backend check in index.js; for required attributes in Frontend
            alert("Please fill in all required fields");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const body = {
                title: title || null,
                prep_time: prep_time || null,
                description: description || null,
                instructions: instructions.split(";").map((item) => item.trim()),
                imageurls: imageURLs.split(",").map((item) => item.trim()),
                ingredients,
            };

            const apiUrl = process.env.REACT_APP_API_URL || "";
            await fetch(`${apiUrl}/api/recipes/${recipe.recipe_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            window.location.reload();

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
            <button type="button" className="btn btn-warning me-2"
                onClick={() => {
                    setIsOpen(true);
                }}>
                Edit
            </button>
            {isOpen && (
                <div className="modal modal-open" id={`editRecipeModal${recipe.recipe_id}`} tabIndex={-1} aria-labelledby="editRecipeModalLabel" aria-hidden="true">
                    <article className="modal-dialog bg-accent-content p-10 rounded-lg shadow-lg">
                        <h2 className="text-secondary text-3xl m-<10> sm:text-5xl md:text-4xl font-bold modal-title">Edit Recipe</h2>
                        <form className="modal-body">
                            <input type="text" className="input input-bordered w-full mb-2" placeholder="Title" value={title}
                                   onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" className="input input-bordered w-full mb-2" placeholder="Prep Time (minutes)" value={prep_time}
                                   onChange={(e) => setPrepTime(e.target.value)}/>
                            <textarea className="textarea textarea-bordered w-full mb-2" placeholder="Description" value={description}
                                      onChange={(e) => setDescription(e.target.value)}/>
                            <textarea className="textarea textarea-bordered w-full mb-2" placeholder="Instructions (semicolon-separated)" value={instructions}
                                      onChange={(e) => setInstructions(e.target.value)}/>
                            <input type="text" className="input input-bordered w-full mb-2" placeholder="Image URLs (comma-separated)" value={imageURLs}
                                   onChange={(e) => setImageURLs(e.target.value)}/>
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="mb-2">
                                    <input type="number" className="input input-bordered w-full mb-1" placeholder="Amount" value={ingredient.amount}
                                           onChange={(e) => handleIngredientChange(index, "amount", Number(e.target.value))}
                                    />
                                    <input type="text" className="textarea textarea-bordered w-full mb-1" placeholder="Unit" value={ingredient.unit ?? ""}
                                           onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                                    />
                                    <input type="text" className="textarea textarea-bordered w-full mb-1" placeholder="Ingredient Name" value={ingredient.name}
                                           onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={handleAddIngredient} className="btn btn-secondary mb-2">
                                Add Ingredient
                            </button>
                        </form>
                        <figure className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={onSubmitFormEdit}>
                                Save
                            </button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => {
                                setTitle(recipe.title);
                                setPrepTime(recipe.prep_time || "");
                                setDescription(recipe.description || "");
                                setInstructions(recipe.instructions ? recipe.instructions.join("; ") : "");
                                setImageURLs(recipe.imageurls ? recipe.imageurls.join("; ") : "");
                                setIngredients(
                                    recipe.ingredients && recipe.ingredients.length > 0
                                        ? recipe.ingredients
                                        : [{ ingredient_id: 0, recipe_id: recipe.recipe_id, amount: 0, unit: null, name: "" }]
                                );
                                setIsOpen(false)
                            }}
                            >
                                Close
                            </button>
                        </figure>
                    </article>
                </div>
            )}
        </Fragment>
    );
};

export default EditRecipe;