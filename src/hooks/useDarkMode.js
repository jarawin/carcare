import { useState, useEffect } from 'react';

function useDarkMode() {
    const defaultTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(defaultTheme);

    // detect theme change from system
    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const colorScheme = event.matches ? 'dark' : 'light';
                console.log(colorScheme);
                setTheme(colorScheme);
            });
    }, []);

    // save theme to localStorage
    useEffect(() => {
        const olderTheme = theme === 'light' ? 'dark' : 'light';
        const root = window.document.documentElement;

        root.classList.remove(olderTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
}

export default useDarkMode;
