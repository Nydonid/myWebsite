import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ViewRecipe from "../components/ViewRecipe";

function Recipe() {
    return (
        <>
            <MyHeader />
            <Fragment>
                <div className="container">
                    <ViewRecipe />
                </div>
            </Fragment>
        </>
    );
}

export default Recipe;