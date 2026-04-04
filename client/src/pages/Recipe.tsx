import MyHeader from "../components/MyHeader";
import React, { Fragment } from "react";
import ViewRecipe from "../components/ViewRecipe";
import MyFooter from "../components/MyFooter";

function Recipe() {
    return (
        <>
            <MyHeader />
            <Fragment>
                <div className="container">
                    <ViewRecipe />
                </div>
            </Fragment>
            <MyFooter />
        </>
    );
}

export default Recipe;