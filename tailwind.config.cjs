/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                99: 'repeat(auto-fit, minmax(75px, 1fr))',
            },
        },
    },
    plugins: [],
}
