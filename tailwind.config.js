const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'transparent': 'transparent',
      'gray': {
        100: '#E8E8E8',
        200: '#C7C7C7',
        300: '#969696',
        400: '#757575',
        500: '#444444',
        600: '#414141',
        700: '#3E3D3C',
        800: '#1A1A1A',
        900: '#151515',
      },
      'blue': {
        400: '#44DBFF',
        500: '#0165B1',
      },
      'green': {
        100: '#EFFFE2',
        500: '#97B1B2',
      },
      black: '#000000',
      orange: '#FEC05C',
      red: '#D12510',
      pink: '#FF069C',
      white: '#FFFFFF',
    },
    fontSize: {
      xs: ['8px', '195%'],
      sm: ['18px', '195%'],
      md: ['24px', '162%'],
      lg: ['26px', '162%'],
      xl: ['54px', '162%'],
      '2xl': ['63px', '100%'],
      '3xl': ['76px', '100%'],
      '4xl': ['133px', '152px'],
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

