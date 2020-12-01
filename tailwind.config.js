module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
      'arrow-left': 'url(/images/arrow-left.svg), auto',
      'arrow-right': 'url(/images/arrow-right.svg), auto',
    },
    extend: {
      colors: {
        'maiia-main-light': '#86e1db',
        'maiia-main-main': '#64c9c3',
        'maiia-main-dark': '#55ABA6',
        'maiia-blue-main': '#50b3c8',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover', 'hover'],
      opacity: ['group-hover', 'hover'],
      transitionProperty: ['group-hover', 'hover'],
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/ui')],
};
