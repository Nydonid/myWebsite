import { Link } from 'react-router-dom';
import MyHeader from '../components/MyHeader';
import Typewriter from '../components/Typewriter';
import StarsBackground from '../components/StarsBackground';
import { useTheme } from '../hooks/useThemes';
import PictureBackground from "../components/PictureBackground";

function Home() {
    const theme = useTheme();

    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <MyHeader />
            <main className="flex-grow flex items-center justify-center bg-base-100 relative">
                {theme === 'dark' ? <StarsBackground /> : <PictureBackground />}
                <article className="hero max-w-4xl mx-auto p-6 text-center z-10">
                    <figure className="hero-content">
                        <div>
                            <Typewriter />
                            <div className="flex items-center justify-center mt-14 mb-12">
                                <img 
                                    src="/mattiastettler-small.png" 
                                    alt="Mattia" 
                                    className="w-16 h-16 rounded-full object-cover border-2 mr-4 border-primary"
                                />
                                <p className="text-2xl sm:text-3xl font-light">Ich bin</p>
                                <p className="text-2xl sm:text-3xl ml-2 mr-2 font-light text-primary">Mattia</p>
                                <p className="text-2xl sm:text-3xl font-light">Stettler</p>
                                <p className="text-2xl sm:text-3xl font-light text-primary">;</p>
                            </div>
                            <p className="text-xl mt-6 mb-6">
                                Informatik Student und Digital Product Engineer, verwöhne hier aber lieber mit meinen Lieblingsrezepten als mit Pointer-Arithmetik, OpenAPI und JavaScript.
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link to="/portfolio" className="btn btn-primary hover:btn-secondary">
                                    Portfolio
                                </Link>
                                <Link to="/recipes" className="btn btn-primary hover:btn-secondary">
                                    Rezepte
                                </Link>
                            </div>
                        </div>
                    </figure>
                </article>
            </main>
        </div>
    );
}

export default Home;
