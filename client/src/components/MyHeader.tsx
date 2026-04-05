import Navbar from '../components/Navbar';
import {CableCar, House, Sun, MoonStar} from 'lucide-react';
import {useTheme} from '../hooks/useThemes';
import {Link} from "react-router-dom";
import StarsBackground from "./StarsBackground";


function MyHeader() {
    const theme = useTheme();

    return (
        <header className="navbar bg-base-100 pl-6 pr-6 shadow-lg flex justify-between items-center dark:border-b-2 dark:border-base-200">
            <Link to="/" className="flex justify-between items-center">
                <CableCar className="mr-3 size-5.5"/> MATTIA
            </Link>
            <Navbar />
        </header>
    )
}

export default MyHeader;