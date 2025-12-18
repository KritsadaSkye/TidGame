/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#3ABFF8',
                    dark: '#1d1d1d',
                    gray: '#838383',
                    redbutton: '#FF0000',
                },
            },
        },
    },
    plugins: [],
}
