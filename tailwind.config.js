module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    height: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'hover', 'focus'],
    transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderRadius: ['responsive', 'hover'],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/ui')],
};
