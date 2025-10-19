/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a2e',
        'dark-card': '#162447',
        'neon-blue': '#27d7fe',
        'neon-purple': '#a779e9',
        'light-text': '#e0e0e0',
      }
    },
  },
  plugins: [],
}