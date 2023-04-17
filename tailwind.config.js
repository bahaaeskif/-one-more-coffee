/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Cairo, sans-serif',
      },
      colors: {
        transparent: 'transparent',
        primaryLight: '#ffffff',
        primaryDark: '#000000',
        secondaryDark: '#121212',
        tertiaryLight: '#f5f5f9',
        tertiaryDark: '#222222',
        textLight: 'rgb(0 0 0 / 0.87)',
        textDark: 'rgb(255 255 255 / 1)',
        subTextLight: 'rgb(0 0 0 / 0.6)',
        subTextDark: 'rgb(255 255 255 / 0.8)',
        navLight: '#d1cac4',
        navDark: '#33312f',
        borderLight: 'rgb(209 , 213 , 219)',
        borderDark: 'rgb(255 255 255 / 0.09)',
      },
    },

  },
  plugins: [],
}