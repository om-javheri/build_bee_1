export default {
    theme: {
        extend: {
            keyframes: {
                scaleIn: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '60%': { transform: 'scale(1.05)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            animation: {
                scaleIn: 'scaleIn 400ms ease-out forwards',
            },
        },
    },
    plugins: [],
}
