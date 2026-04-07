/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: { extend: {} },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", {
            mythemedark: {
                "primary": "#00ffff",
                "primary-content": "#000000",
                "secondary": "#ffffff",
                "secondary-content": "#000000",
                "accent": "#00ffff",
                "accent-content": "#000000",
                "neutral": "#1a1a1a",
                "base-100": "#000000",
                "base-200": "#2b2b2b",
                "base-300": "#4a4a4a",
                "base-content": "#ffffff",
                "info": "#00ffff",
                "success": "#00ff00",
                "warning": "#ffbb00",
                "error": "#ff0000"
            },
        },],
        darkTheme: "mythemedark",
    },
};