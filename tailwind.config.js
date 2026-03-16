/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandRed: '#E30613',
        brandBlue: '#0033A0',
        brandYellow: '#FFD700',
        brandWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

