/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                notfound: "url('/src/assets/images/bg-notfound.png')",
                banner: "url('/src/assets/images/banner2.jpg')",
                overlayBg:
                    'linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));',
                grayTran:
                    'linear-gradient(to top,transparent 0%, rgba(0,0,0,.3) 50%)',
            },
            boxShadow: {
                '30xl': '0 0 80px 400px rgba(0, 0, 0, 0.25)',
            },
            colors: {
                grayOver: 'rgba(0,0,0,0.4)',
                border_color: '#222',
                gray_color: '#303030',
                text_color: '#737373',
                text_gray: '#B3B3B3',
                overlayColor: 'rgba(0,0,0,.75)',
                bg_color: '#141414',
                header_black: 'rgb(20,20,20)',
                btn_color: 'rgba(109,109,110,0.7)',
                btn_color_hv: 'rgba(109,109,110,0.5)',
                green: '#46D369',
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
