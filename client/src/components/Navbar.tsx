import {Link} from "react-router-dom";
import {useState} from "react";
import {House, Menu, CookingPot, BookCheck } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hamburger for mobile */}
            <nav className="dropdown md:hidden">
                <button
                    className="btn btn-ghost text-lg"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <Menu className="mr-1.5 size-5.5"/>
                </button>
                {isOpen && (
                    <ul className="menu dropdown-content bg-base-100 shadow rounded-box w-52 p-2 absolute right-0 mt-2">
                        <li>
                            <Link to="/" className="flex items-center text-lg" onClick={() => setIsOpen(false)}>
                                <House className="mr-1.5 size-5.5"/> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="flex items-center text-lg" onClick={() => setIsOpen(false)}>
                                <BookCheck className="mr-1.5 size-5.5"/> Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" className="flex items-center text-lg" onClick={() => setIsOpen(false)}>
                                <CookingPot className="mr-1.5 size-5.5"/> Rezepte
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
            {/* Full nav for larger screens */}
            <nav className="hidden md:flex gap-4">
                <Link to="/" className="btn btn-ghost text-lg flex items-center">
                    <House className="mr-1.5 size-5.5"/> Home
                </Link>
                <Link to="/portfolio" className="btn btn-ghost text-lg flex items-center">
                    <BookCheck className="mr-1.5 size-5.5"/> Portfolio
                </Link>
                <Link to="/recipes" className="btn btn-ghost text-lg flex items-center">
                    <CookingPot className="mr-1.5 size-5.5"/> Rezepte
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
// <IoMdHome className="mr-2"/> Todo emoji debug
