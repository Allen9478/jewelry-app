/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E8D5A3',
          DEFAULT: '#C9A84C',
          dark: '#9A7B2F',
        },
        cream: '#FAF8F5',
        'dark-base': '#1A1A1A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
