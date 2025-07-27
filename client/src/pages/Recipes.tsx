import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ListRecipes from "../components/ListRecipes";
import InputRecipe from "../components/InputRecipe";

function Recipes() {
    return (
            <>
                <MyHeader />
                <h1 className="text-3xl font-bold mb-4 gap-4 max-w-7xl mx-auto p-4">My Recipes</h1>
                <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto p-4">
                    <Fragment>
                        <div className="container">
                            <ListRecipes />
                        </div>
                    </Fragment>
                </main>
        </>
    );
}

export default Recipes;
