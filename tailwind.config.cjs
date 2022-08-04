/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                notfound: "url('/src/assets/images/bg-notfound.png')",
            },
            boxShadow: {
                '30xl': '0 0 130px 400px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [],
};
