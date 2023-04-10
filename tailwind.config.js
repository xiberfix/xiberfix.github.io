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
                            borderBottom: `2px solid ${theme('colors.blue.400')}`,
                            '&:hover': {
                                borderBottom: `2px solid ${theme('colors.blue.600')}`,
                            },
                        },
                        code: {
                            backgroundColor: theme('colors.slate.200'),
                            fontWeight: 'inherit',
                            padding: '0.125rem 0.25rem',
                            borderRadius: '0.25rem',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
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

                invert: {
                    css: {
                        a: {
                            borderBottom: `2px solid ${theme('colors.blue.600')}`,
                            '&:hover': {
                                borderBottom: `2px solid ${theme('colors.blue.400')}`,
                            },
                        },
                        code: {
                            backgroundColor: theme('colors.slate.700'),
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
}
