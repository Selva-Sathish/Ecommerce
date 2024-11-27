/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1d4ed8',
        danger: '#dc3545',
      },
      keyframes :{
        load : {
          '0%': { width : '0%'},
          '25%': { width : '25%'},
          '50%': { width : '50%'},
          '75%': { width : '75%'},
          '100%': { width : '100%'},
        },
      },
      animation: {
        load : 'load 2s ease-in-out'
      }
    },
  },
  plugins: [],
}

