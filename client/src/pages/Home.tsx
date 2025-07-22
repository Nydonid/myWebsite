import { Link } from 'react-router-dom';
import {IoMdHome, IoMdMenu} from "react-icons/io";
import {useState} from "react";


function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="navbar bg-base-100 pl-6 pr-6 shadow-lg justify-between items-center">
                <p className="flex justify-between items-center">MORGEE</p>
                {/* Hamburger for mobile */}
                <div className="dropdown md:hidden">
                    <button
                        className="btn btn-ghost text-lg"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <p>MORGEE</p>
                    </button>
                    {isOpen && (
                        <ul className="menu dropdown-content bg-base-100 shadow rounded-box w-52 p-2 absolute right-0 mt-2">
                            <li>
                                <Link to="/" className="flex items-center text-lg" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="flex items-center text-lg" onClick={() => setIsOpen(false)}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/recipes" className="flex items-center text-lg" onClick={() => setIsOpen(false)}> Recipes</Link>
                            </li>
                        </ul>
                    )}
                </div>
                {/* Full nav for larger screens */}
                <nav className="flex gap-4">
                    <Link to="/" className="btn btn-ghost text-lg items-center"> Home</Link>
                    <Link to="/portfolio" className="btn btn-ghost text-lg items-center"> Portfolio</Link>
                    <Link to="/recipes" className="btn btn-ghost text-lg items-center"> Recipes</Link>
                </nav>
            </header>
            <main className="content">
                <div className="min-h-screen bg-base-200 flex items-center justify-center">
                    <div className="hero max-w-4xl mx-auto p-6 text-center">
                        <div className="hero-content">
                            <div>
                                <h1 className="text-7xl font-bold text-primary">Welcome to My World</h1>
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
            </main>
        </>
    );
}

export default Home;

// <IoMdHome className="mr-2"/> Todo emoji debug
