const typography = require('@manishrc/tailwindcss-typography-js');

const typographyTheme = typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Space Mono', 'sans-serif'],
  bodyFontFamily: ['Inter', 'sans-serif'],
});

module.exports = {
  content: [
    './index.njk',
    './404.njk',
    './notes.njk',
    './contact.njk',
    './src/_includes/**/*.njk',
    './content/blog/**/*.md',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        xxl: '1280px',
      },
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
  plugins: [typographyTheme],
};
