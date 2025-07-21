import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/">Home</a>
                <a href="Portfolio">Portfolio</a>
                <a href="Recipes">Recipes</a>
            </nav>
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="hero max-w-4xl mx-auto p-6 text-center">
                    <div className="hero-content">
                        <div>
                            <h1 className="text-5xl font-bold text-primary">Welcome to My World</h1>
                            <p className="text-lg text-base-content mt-4 mb-6">
                                Explore my portfolio and discover delicious recipes.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link to="/portfolio" className="btn btn-primary">
                                    Portfolio
                                </Link>
                                <Link to="/recipes" className="btn btn-secondary">
                                    Recipes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;