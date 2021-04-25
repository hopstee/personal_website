const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './styles/**/*.css'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            red: colors.red,
            yellow: colors.amber,
            blue: colors.blue
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    important: true,
}
