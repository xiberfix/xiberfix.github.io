/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx,js,jsx,md,mdx}', './components/**/*.{ts,tsx,js,jsx,md,mdx}'],
    theme: {
        extend: {
            typography: theme => ({
                DEFAULT: {
                    css: {},
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
}
