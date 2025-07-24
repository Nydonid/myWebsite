import Navbar from '../components/Navbar';
import {CableCar, House, Sun, MoonStar} from 'lucide-react';
import { useState, useEffect } from 'react';
import {useTheme} from '../hooks/useThemes';
import StarsBackground from "./StarsBackground";

function MyHeader() {
    const theme = useTheme();

    return (
        <header className="navbar bg-base-100 pl-6 pr-6 shadow-lg justify-between items-center">
            <p className="flex justify-between items-center">
                <CableCar className="mr-3 size-5.5"/> MATTIA
            </p>
            <Navbar />
        </header>
    )
}

export default MyHeader;