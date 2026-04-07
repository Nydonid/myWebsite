import React from 'react';

const PictureBackground = () => {
    const config = {
        opacity: 0.18,      // Transparency (0 to 1)
        contrast: '1.3',   // Contrast (e.g., '1.2')
        imagePath: '/background.jpg',
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${config.imagePath})`,
                    opacity: config.opacity,
                    filter: `
                        contrast(${config.contrast}) 
                    `,
                }}
            />
        </div>
    );
};

export default PictureBackground;
