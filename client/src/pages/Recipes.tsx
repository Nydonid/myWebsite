import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ListRecipes from "../components/ListRecipes";
import MyFooter from "../components/MyFooter";

function Recipes() {
    return (
        <div className="min-h-screen flex flex-col">
            <MyHeader />
            <main className="flex-grow flex flex-col items-center">
                <div className="max-w-full py-12 space-y-8">
                    <h1 className="text-3xl font-bold text-base-content">Meine Rezepte</h1>
                    <div className="container mx-auto flex justify-center max-w-screen-lg">
                        <ListRecipes />
                    </div>
                </div>
            </main>
            <MyFooter />
        </div>
    );
}

export default Recipes;

