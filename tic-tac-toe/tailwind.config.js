/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'custom-white': '#FAFAFA',
      'custom-grey': '#EAEAEA',
      'custom-dark-grey': '#2E2E2E',
      'custom-black': '#121212',
      'custom-red': '#F05D5E',
    },
    extend: {},
  },
  plugins: [],
}

