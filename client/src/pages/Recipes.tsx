import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ListRecipes from "../components/ListRecipes";

function Recipes() {
    return (
        <>
            <MyHeader />
            <main className="space-y-8 max-w-4xl mx-auto mt-10 ml-6 mr-6  lg:ml-[22vw]">
                <h1 className="text-3xl font-bold max-w-7xl mt-4">Meine Rezepte</h1>
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

