import React from 'react';

function Home(props: { disableCustomTheme?: boolean }) {
    return (
        <div>
            <div>Mattias site</div>
            <a href="/">Home</a>
            <a href="Portfolio">Portfolio</a>
            <a href="Recipes">Recipes</a>
        </div>
    );
}


export default Home;