import {Link} from "react-router-dom";
import MyHeader from "../components/MyHeader";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [message, setMessage] = useState('');

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/auth/login', {
                username,
                password,
            });
            setToken(data.token);
            localStorage.setItem('token', data.token);
            setMessage('Logged in successfully');
        } catch (err) {
            setMessage('Login failed');
        }
    };

    const handleRegister = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', {
                username,
                password,
            });
            setMessage('Registered successfully');
        } catch (err) {
            setMessage('Registration failed');
        }
    };

    const handleSubmitRecipe = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:5000/recipes',
                { title, ingredients, instructions },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage('Recipe added');
            fetchRecipes();
        } catch (err) {
            setMessage('Failed to add recipe');
        }
    };

    const fetchRecipes = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/recipes', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRecipes(data);
        } catch (err) {
            setMessage('Failed to fetch recipes');
        }
    };

    useEffect(() => {
        if (token) fetchRecipes();
    }, [token]);

    return (
        <div className="container mx-auto p-4">
            {!token ? (
                <div className="card bg-base-100 shadow-xl p-6">
                    <h2 className="card-title">Login / Register</h2>
                    <form className="form-control">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input input-bordered mb-2"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered mb-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="card-actions">
                            <button className="btn btn-primary" onClick={handleLogin}>
                                Login
                            </button>
                            <button className="btn btn-secondary" onClick={handleRegister}>
                                Register
                            </button>
                        </div>
                    </form>
                    {message && <p className="mt-2">{message}</p>}
                </div>
            ) : (
                <div>
                    <div className="card bg-base-100 shadow-xl p-6 mb-4">
                        <h2 className="card-title">Add Recipe</h2>
                        <form className="form-control">
                            <input
                                type="text"
                                placeholder="Recipe Title"
                                className="input input-bordered mb-2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                placeholder="Ingredients"
                                className="textarea textarea-bordered mb-2"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                            />
                            <textarea
                                placeholder="Instructions"
                                className="textarea textarea-bordered mb-2"
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                            />
                            <button className="btn btn-primary" onClick={handleSubmitRecipe}>
                                Submit Recipe
                            </button>
                        </form>
                        {message && <p className="mt-2">{message}</p>}
                    </div>
                    <div>
                        <h2 className="text-2xl mb-4">Your Recipes</h2>
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="card bg-base-100 shadow-xl mb-4 p-4">
                                <h3 className="card-title">{recipe.title}</h3>
                                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p><strong>Instructions:</strong> {recipe.instructions}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recipes;

/* TODO this is old mock code
function Recipes() {
    return (
            <>
                <MyHeader />
                <h1 className="text-3xl font-bold mb-4 gap-4 max-w-7xl mx-auto p-4">My Recipes</h1>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto p-4">
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Chocolate Cake</h2>
                        <p className="text-gray-600">Delicious cake recipe...</p>
                    </div>
                    <div className="p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Pasta Alfredo</h2>
                        <p className="text-gray-600">Creamy pasta dish...</p>
                    </div>
                </main>
        </>
    );
}

export default Recipes;*/
