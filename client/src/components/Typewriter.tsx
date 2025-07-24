import { useEffect, useState } from 'react';

function Typewriter() {
    const words = ['Ciaoo', 'Salii', 'Morgee'];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const currentWord = words[index];
        const typingSpeed = 175; // Speed for typing
        const deletingSpeed = 125; // Speed for deleting
        const pauseDuration = 1500; // Pause after typing/deleting

        const timer = setTimeout(() => {
            if (!isDeleting) { // If isDeleting is false, means word can be typed
                if (text.length < currentWord.length) {
                    setText(currentWord.slice(0, text.length + 1));
                } else { // Finished typing, start deleting after pause
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else { // Deleting if deleting is true
                if (text.length > 0) {
                    setText(currentWord.slice(0, text.length - 1));
                } else { // Finished deleting (text length == 0), move to next word
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, index, words]);

    return (
        <h1 className="text-primary text-4xl sm:text-7xl md:text-6xl font-bold" aria-label="Welcome Message">
            <span aria-hidden="true">{text}</span>
            <span className="animate-blink">|</span>
        </h1>
    );
}

export default Typewriter;