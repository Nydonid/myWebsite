import React, { Fragment, useState } from "react";
import {Ingredient} from "../RecipeInterface";

const InputRecipe = () => {
    const [title, setTitle] = useState("");
    const [prep_time, setPrepTime] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [imageURLs, setImageURLs] = useState("");
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { ingredient_id: 0, recipe_id: 0, amount: 0, unit: null, name: "" }
    ]);

    const onSubmitFormInput = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !ingredients || !instructions) { // Additional to backend check in index.js; for required attributes in Frontend
            alert("Please fill in all required fields");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const body = {
                title,
                prep_time: prep_time || null,
                description,
                instructions: instructions.split(";").map((item) => item.trim()),
                imageurls: imageURLs.split(";").map((item) => item.trim()),
                ingredients,
            };

            await fetch("http://localhost:5000/recipes", { // TODO localhost sure wrong for production
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            window.location.reload();

        } catch (err: unknown) {
            console.error(err instanceof Error ? err.message : "Unknown error");
            alert("Error inserting new recipe");
        }
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { ingredient_id: 0, recipe_id: 0, amount: 0, unit: "", name: "" }]);
    };

    const handleIngredientChange = (index: number, field: string, value: string | number) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = { ...newIngredients[index], [field]: value };
        setIngredients(newIngredients);
    };

    return (
        <Fragment>
            <article className="modal-dialog bg-accent-content p-10 rounded-lg shadow-lg">
                <h2 className="text-secondary text-3xl m-<10> sm:text-5xl md:text-4xl font-bold modal-title">New Recipe Upload</h2>
                <form className="mt-5" onSubmit={onSubmitFormInput}>
                    <input type="text" className="input input-bordered w-full mb-2" placeholder="Title" value={title}
                           onChange={(e) => setTitle(e.target.value)}
                    />
                    <input className="input input-bordered w-full mb-2" placeholder="Prep time" value={prep_time}
                           onChange={(e) => setPrepTime(e.target.value)}
                    />
                    <textarea className="textarea textarea-bordered w-full mb-1" placeholder="Description" value={description}
                              onChange={(e) => setDescription(e.target.value)}
                    />
                    <textarea className="textarea textarea-bordered w-full mb-1" placeholder="Instructions (comma-separated)" value={instructions}
                              onChange={(e) => setInstructions(e.target.value)}
                    />
                    <input type="text" className="input input-bordered w-full mb-2" placeholder="Image URLs (comma-separated)" value={imageURLs}
                           onChange={(e) => setImageURLs(e.target.value)}
                    />
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="mb-2">
                            <input type="number" className="input input-bordered w-full mb-2" placeholder="Amount" value={ingredient.amount}
                                   onChange={(e) => handleIngredientChange(index, "amount", Number(e.target.value))}
                            />
                            <input type="text" className="textarea textarea-bordered w-full mb-1" placeholder="Unit (e.g., g, Tassen)" value={ingredient.unit ?? ""}
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
                    <button className="btn btn-primary">Add</button>
                </form>
            </article>
        </Fragment>
    );
};

export default InputRecipe;