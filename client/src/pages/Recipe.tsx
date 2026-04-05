import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ViewRecipe from "../components/ViewRecipe";
import MyFooter from "../components/MyFooter";

function Recipe() {
    return (
        <div className="min-h-screen flex flex-col">
            <MyHeader />
            <main className="flex-grow flex flex-col items-center">
                <div className="w-full max-w-4xl px-6 py-10 space-y-8">
                    <div className="container mx-auto flex justify-center max-w-screen-lg">
                        <ViewRecipe />
                    </div>
                </div>
            </main>
            <MyFooter />
        </div>
    );
}

export default Recipe;