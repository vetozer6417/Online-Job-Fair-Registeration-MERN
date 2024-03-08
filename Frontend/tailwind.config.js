/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontWeight: {
        semibold: 600,
        medium: 500,
        regular: 400
      }
    },
  },
  plugins: [],
}

