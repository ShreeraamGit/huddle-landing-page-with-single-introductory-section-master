module.exports = {
    mode: 'jit',
    purge: ["../*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: theme => ({
                ...theme('colors'),
                'main': 'hsl(257, 40%, 49%)',
                'button-hover': 'hsl(300, 69%, 71%)'
            }),
            fontFamily: {
                'heading': "'Poppins', sans-serif;",
                'content': "'Open Sans', sans-serif"
            },
            backgroundImage: {
                'desk-pattern': "url('/images/bg-desktop.svg')",
                'mobile-pattern': "url('/images/bg-mobile.svg')",
            },
            textColor: {
                'primary': '#FFFFFF',
                'button-nrml': 'hsl(257, 40%, 49%)',
                'hover': 'hsl(300, 69%, 71%)'
            },
            borderColor: theme => ({
                ...theme('colors'),
                DEFAULT: theme('colors.gray.300', 'currentColor'),
                'social-border': 'hsl(300, 69%, 71%)',
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}