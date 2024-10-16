module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'], // Pour le texte par défaut
        barlow: ['Barlow', 'sans-serif'], // Pour les titres et autres éléments
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}