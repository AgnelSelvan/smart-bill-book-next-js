/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // primary: '#fd8d00',
        primary: {
                  DEFAULT: '#fd8d00',
        },
        'primary-dark': '#e67e00',
        'primary-light': '#ff9f1a',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}