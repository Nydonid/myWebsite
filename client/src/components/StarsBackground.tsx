import React from 'react';

interface StarsBackgroundProps {
    className?: string;
}

const StarsBackground: React.FC<StarsBackgroundProps> = () => {const stars = Array.from({length: 160}).map((_, i) => (
        <div
            key={i}
            className="star"
            style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 7 + 12}s`,
                animationDelay: `${Math.random() * -15}s`,
                opacity: Math.random() * 0.2 + 0.8,
            }}
        />
    ));
    return <div className="stars-bg">{stars}</div>;
}

export default StarsBackground;