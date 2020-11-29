module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/ui')],
};
