import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ListRecipes from "../components/ListRecipes";

function Recipes() {
    return (
        <>
            <MyHeader />
            <h1 className="text-3xl font-bold mb-4 max-w-7xl mt-4 ml-32 p-4">Meine Rezepte</h1>
            <main className="">
                <Fragment>
                    <div className="container mx-auto flex justify-center max-w-screen-lg">
                        <ListRecipes />
                    </div>
                </Fragment>
            </main>
        </>
    );
}

export default Recipes;

