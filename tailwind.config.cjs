/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                notfound: "url('/src/assets/images/bg-notfound.png')",
                overlayBg:
                    'linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));',
            },
            boxShadow: {
                '30xl': '0 0 80px 400px rgba(0, 0, 0, 0.25)',
            },
            colors: {
                grayOver: 'rgba(0,0,0,0.4)',
                border_color: '#222',
                gray_color: '#303030',
                text_color: '#737373',
            },
        },
    },
    plugins: [],
};
