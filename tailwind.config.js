/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        500: '#44AB42',
        400: '#64C661',
        300: '#A3FDA1',
        200: '#DAFED9',
        100: '#F6FFF6',
      },
      light: {
        100: '#FFFFFF',
        200: '#F0F0F0',
        300: '#E9E9E9',
      },
      dark: {
        500: '#101010',
        400: '#292929',
        300: '#464646',
        200: '#646464',
        100: '#818181',
      },
      alert: '#AC353D',
    },
    extend: {},
  },
  plugins: [],
};
