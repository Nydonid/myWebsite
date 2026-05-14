import React from 'react';

interface StarsBackgroundProps {
    className?: string;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ className }) => {    const stars = Array.from({length: 50}).map((_, i) => (
        <div
            key={i}
            className="star"
            style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 8}s`,
                animationDelay: `${Math.random() * -15}s`,
                opacity: Math.random() * 0.5 + 0.3,
            }}
        />
    ));

    return <div className="stars-bg">{stars}</div>;
}

export default StarsBackground;