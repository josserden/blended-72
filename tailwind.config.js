/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

  theme: {
    extend: {},

    container: {
      center: true,
      padding: {
        DEFAULT: '0.9375rem',
      },
    },

    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
  },

  plugins: [],
};
