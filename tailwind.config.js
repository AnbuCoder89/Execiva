/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#f5f5f7',
        'beige': '#faf7f2',
        'dark': '#1a1a1a',
      },
      fontFamily: {
        'sf-pro-display': ['SF Pro Display', 'sans-serif'],
        'sf-pro-text': ['SF Pro Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

