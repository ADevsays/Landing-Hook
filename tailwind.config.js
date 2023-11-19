/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['system-ui', '-apple-system', 'Poppins']
      },
      colors:{
        primary: '#192233',
        secondary: '#f4fdfc',
        terciary: '#1E92D2',
        'primary-dark': '#111827'
      }
    }
  },
  plugins: [],
}

