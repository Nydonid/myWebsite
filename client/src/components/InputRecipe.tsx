import React, { Fragment, useState } from "react";

const InputRecipe = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [imageURLs, setImageURLs] = useState("");

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !ingredients || !instructions) {
            alert("Please fill in all required fields");
            return;
        }
        const token = localStorage.getItem("token");
        try {
            const body = {
                title,
                ingredients: ingredients.split(",").map((item) => item.trim()),
                instructions: instructions.split(",").map((item) => item.trim()),
                imageURLs: imageURLs.split(",").map((item) => item.trim()),
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
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Recipe Upload</h1>
            <form className="mt-5" onSubmit={onSubmitForm}>
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
                    placeholder="Instructions (comma-separated)"
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
                <button className="btn btn-primary">Add</button>
            </form>
        </Fragment>
    );
};

export default InputRecipe;