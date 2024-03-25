const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
    extend: {

      dropShadow: {
        path: [
          '0 0 1.875rem rgba(255, 255, 255, .58)',
          '0 -2.1875rem 2.5625rem rgba(255, 255, 255, .41)',
          '0 -5.6875rem 4.375rem rgba(255, 255, 255, .51)',
          '0 -10.25rem 5.6875rem rgba(255, 255, 255, .31)',
        ],
        path2: [
          '0px 0px 30px rgba(255, 255, 255, 0.58)',
          '0px -35px 41px rgba(255, 255, 255, 0.41)',
          '0px -91px 70px rgba(255, 255, 255, 0.51) ',
          '0px -164px 91px rgba(255, 255, 255, 0.31)',
        ],
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'mono': ['Menlo', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        updown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
        updown: 'updown 2.5s ease-in-out infinite alternate',
        updownReverse: 'updown 2.5s ease-in-out infinite alternate reverse',
      },
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}

