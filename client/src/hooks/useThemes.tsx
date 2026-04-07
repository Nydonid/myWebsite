import { useEffect, useState } from 'react';

// this useTheme() function is used to detect (listen) for darkmode enabled on the system. required for applicances like StarsBackground in Home.tsx
export function useTheme() {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const updateTheme = () => {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDarkMode ? 'dark' : 'light');
        };

        updateTheme();
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', updateTheme);

        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, []);

    return theme;
}