/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '599px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '389px' },
      // => @media (max-width: 639px) { ... }

      vsm: { max: '299px' },
      // => @media (max-width: 299px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
