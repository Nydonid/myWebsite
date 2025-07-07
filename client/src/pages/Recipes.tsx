import React from 'react';

function Recipes() {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <a href="/">Home</a>
            <a href="Portfolio">Portfolio</a>
            <a href="Recipes">Recipes</a>
            <h1 className="text-3xl font-bold mb-4">My Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Chocolate Cake</h2>
                    <p className="text-gray-600">Delicious cake recipe...</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Pasta Alfredo</h2>
                    <p className="text-gray-600">Creamy pasta dish...</p>
                </div>
            </div>
        </div>
    );
}

export default Recipes;