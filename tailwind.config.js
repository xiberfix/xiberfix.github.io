/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{ts,tsx,js,jsx,md,mdx}', './components/**/*.{ts,tsx,js,jsx,md,mdx}'],
    theme: {
        extend: {
            typography: theme => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: 'inherit',
                            fontWeight: 'inherit',
                            textDecoration: 'none',
                            borderBottom: `2px solid ${theme('colors.blue.300')}`,
                            '&:hover': {
                                borderBottom: `2px solid ${theme('colors.blue.500')}`,
                            },
                        },
                        code: {
                            fontWeight: 'inherit',
                            backgroundColor: theme('colors.gray.200'),
                            padding: '0.125rem 0.25rem',
                            borderRadius: '0.25rem',
                        },
                        img: {
                            borderRadius: '0.375rem',
                        },
                        'code::before': null,
                        'code::after': null,
                        'blockquote p:first-of-type::before': null,
                        'blockquote p:last-of-type::after': null,
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
}
