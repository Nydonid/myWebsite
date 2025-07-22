import React from 'react';
import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to="/" className="btn btn-ghost text-lg "> Home</Link>
                    <Link to="/portfolio" className="btn btn-ghost text-lg"> Portfolio</Link>
                    <Link to="/recipes" className="btn btn-ghost text-lg"> Recipes</Link>
                </nav>
            </header>
        </>
    );
}

export default Portfolio;