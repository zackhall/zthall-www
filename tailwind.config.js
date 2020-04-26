const typography = require('@manishrc/tailwindcss-typography-js');

const typographyTheme = typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono', 'sans-serif'],
  bodyFontFamily: ['Inter', 'sans-serif'],
});

module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Space Mono', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        green: {
          '100': '#e6ebeb',
          '200': '#b5c4c3',
          '300': '#9db0af',
          '400': '#849c9b',
          '500': '#6b8886',
          '600': '#537472',
          '700': '#3a615e',
          '800': '#224d4a',
          '900': '#093936',
        },
      },
      letterSpacing: {
        tightest: '-.15em',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [typographyTheme],
};
