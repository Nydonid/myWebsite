import { Link } from 'react-router-dom';
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
                            <div className="flex items-center justify-center gap-2 mt-12 mb-12">
                                <img 
                                    src="/mattiastettler-small.png" 
                                    alt="Mattia" 
                                    className="w-16 h-16 rounded-full object-cover border-2 mr-4 border-primary"
                                />
                                <p className="text-3xl font-light">Ich bin</p>
                                <p className="text-3xl font-light text-primary">Mattia</p>
                                <p className="text-3xl font-light">Stettler</p>
                            </div>
                            <p className="text-2xl mt-6 mb-6">
                                Hallo auf meiner Webseite, entdecke feine Rezepte und .
                            </p>
                            <div className="flex justify-center gap-4">
                                <Link to="/portfolio" className="btn btn-primary">
                                    Portfolio
                                </Link>
                                <Link to="/recipes" className="btn btn-accent">
                                    Rezepte
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
