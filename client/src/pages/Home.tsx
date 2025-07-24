import { Link } from 'react-router-dom';
import {IoMdHome, IoMdMenu} from "react-icons/io";
import MyHeader from '../components/MyHeader';
import Typewriter from '../components/Typewriter';
import StarsBackground from '../components/StarsBackground';
import { useTheme } from '../hooks/useThemes';

function Home() {
    const theme = useTheme();

    return (
        <>
            <MyHeader />
            <main className="content min-h-screen bg-base-200 flex items-center justify-center">
                {theme === 'dark' && <StarsBackground />}
                <article className="hero max-w-4xl mx-auto mt-[4] p-6 text-center">
                    <figure className="hero-content">
                        <div>
                            <Typewriter />
                            <p className="text-2xl text-base-content mt-6 mb-6">
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
                    </figure>
                </article>
            </main>
        </>
    );
}

export default Home;

