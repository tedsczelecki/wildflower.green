/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        accent: ['"Mr De Haviland"', 'cursive'],
        title: ['"Lora"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
